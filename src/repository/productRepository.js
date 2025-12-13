import Product from '../schema/productSchema'

// error is not handled properly

async function getProductById(productId){
    try{
        const resp = await Product.findById(productId);
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function getProductByIdAndDelete(productId){
    try{
        const resp = await Product.findByIdAndDelete(productId);
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function getAllProducts(){
    try{
        const responses = await Product.find({});
        return responses;
    }
    catch(error){
        console.log(error);
    }
}

async function createProduct(productDetails){
    try{
        const resp = await Product.create(productDetails);
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

export {createProduct, findById, findByIdAndDelete, getAllProducts};