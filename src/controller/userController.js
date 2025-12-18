import registerUser from '../service/userService'

// catch part needs updation

async function createUser(req,res){
    try{
        const response = registerUser(req.body);
        return res.status(201).json({
            message : "registered user sucessfully",
            success : true,
            data : response,
            error : {}
        })
    }
    catch(error){
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: {},
            error : error
        })
    }
}

export {createUser};