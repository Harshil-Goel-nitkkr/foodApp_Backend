import findUser from '../repository/userRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {securityKey,expiryTime} from '../config/serverConfig'

async function loginUser(authDetails){
    const email = authDetails.email;
    const pwd = authDetails.pwd;
    const user = await findUser(email);

    if(!user){
        throw {message: "User with given email not found", status:404};
    }

    // email is registered now check the password
    const isPwdValid = bcrypt.compare(pwd, user.password);

    if(!isPwdValid){
        throw {message: "password not validated", status: 401};
    }

    // now user is authenticated, return a token (use jwt)
    const token = jwt.sign({email: email}, securityKey,{expiresIn: expiryTime});

    const userRole = user.role;

    return {token,userRole,userData:{
        email: user.email,
        firstName: user.firstName
    }};
}

export default loginUser;