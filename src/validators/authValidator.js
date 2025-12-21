import jwt from 'jsonwebtoken'
import { securityKey } from '../config/serverConfig';

async function isLoggedIn(req,res,next){
    // checks if the given user is logged in or not
    // if it is logged in then the user email, id, role will be saved in the req.user.email etc
    const token = req.cookies["authToken"];
    if(!token){
        return req.status(401).json({
            success: false,
            data:{},
            message: " no auth token provided",
            error:{
                statusCode:401,
                response: "Auth token not provided"
            }
        });
    }

    try{
        const decoded = await jwt.verify(token,securityKey);
        req.user = {
            email : decoded.email,
            userId : decoded.id,
            roel : decoded.role
        };
        next();
    }
    catch(error){
        return req.status(401).json({
            data:{},
            success:false,
            error:error,
            message: "token is not verified"
        })
    }
}

async function isAdmin(req,res,next){
    // checks if the given user is an admin or a simple user
    // always called after isLoggedIn function
    const user = req.user;
    if(user.role == "ADMIN"){
        console.log("User is an Admin");
        next();
    }
    else{
        return req.status(401).json({
            success : false,
            data : {},
            error:{
                statusCode: 401,
                response: "Unauthorised user access",
            },
            message: "user is not an admin"
        });
    }

}

export {isLoggedIn,isAdmin};