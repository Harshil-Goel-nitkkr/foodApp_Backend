
async function createProduct(req,res){
    console.log("creatingproduct");
}

async function getProductByProductId(req,res){
    console.log("getting product with given id");
}

async function getProductsByUserId(req,res){
    console.log("getting all products");
}

async function deleteProduct(req,resp){
    console.log("deleting product wiht given id");
}

export {createProduct,getProductsByUserId,getProductByProductId,deleteProduct};