const { COOKIE_SECURE, FRONTEND_URL } = require("../config/serverConfig");
const { loginUser } = require("../services/authService");

async function logout(req, res) {
    // the auth token(jwt) that was stored as cookie is now removed
    // the cookie is updated and the key 'authToken' is assigned an empty string as value

    console.log("Cookie from frontend", req.cookies);

    res.cookie("authToken", "", {
        httpOnly: true,
        secure: COOKIE_SECURE,
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        domain: FRONTEND_URL
    });
    return res.status(200).json({
        success: true,
        message: "Log out successfull",
        error: {},
        data: {}
    });
}

async function logIn(req,res){
    try{
        const payload = req.body;
        const response = await loginUser(payload);

        // stored as http only cookie
        res.cookie("authToken", response.token, {
            httpOnly: true,
            secure: COOKIE_SECURE,
            sameSite: "lax",
            domain: FRONTEND_URL,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({
            message: "Logged in successfully",
            success: true,
            data: {
                userRole: response.userRole,
                userData: response.userData
            },
            error: {}
        });
        
    }
    catch(error){
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: {},
            error: error
        });
    }
}

async function logOut(req,res){
    console.log("logOut");
}

export {logIn,logOut};