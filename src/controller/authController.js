
// implementation of logOut pending

async function logIn(req,res){
    try{
        const payload = req.body;
        const response = await loginUser(payload);

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