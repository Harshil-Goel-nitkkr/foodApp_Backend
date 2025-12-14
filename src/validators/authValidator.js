
async function isLoggedIn(req,res,next){
    console.log("checking is Logged in");
}

async function isAdmin(req,res,next){
    console.log("checking is admin");
}

export {isLoggedIn,isAdmin};