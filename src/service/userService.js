import {createUser,findUser} from '../repository/userRepository'
import { createCart } from '../repository/cartRepository';

async function registerUser(userDetails){
    // here we will create a new user on db

    // check whether the user with given email and ph number already exists in database
    const user = await findUser({
        $or : [
            {email : userDetails.email},
            {mobileNumber: userDetails.mobileNumber}
        ]
    })

    if(user.length > 0){
        throw {reason : "user with given email or phNumber exists", status:400};
    }

    // if no user exist then create the new user
    const newUser = await createUser({
        email: userDetails.email,
        password: userDetails.password,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        mobileNumber: userDetails.mobileNumber,
        address: userDetails.address,
        role: userDetails.role
    });

    if(!newUser){
        throw {reason:"something went wrong, can't connect to database", status:500};
    }

    await createCart(newUser._id);

    return newUser;
}

export default registerUser;