import User from '../schema/userSchema'

// error is not handled properly in create user

async function findUser(userDetails){
    try{
        const resp = await User.findOne({...userDetails});
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function createUser(userDetails){
    try{
        const resp = await User.create(userDetails);
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

return {createUser,findUser};