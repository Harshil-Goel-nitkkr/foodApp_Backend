import cloudinary from '../config/cloudinaryConfig'
import InternalServerError from '../utils/internalServerError'
import NotFoundError from '../utils/notFoundError'
import defaultProductImage from '../config/serverConfig'
import {createProduct as createProductRepo, getProductById as getProductByIdRepo, getAllProducts, getProductByIdAndDelete} from '../repository/productRepository'
import fs from 'fs';
import path from 'path';

async function getProductById(productId){
    const product = await getProductByIdRepo(productId);
    if(!product){
        throw new NotFoundError('Product');
    }
    return product;
}

async function getAllProductsData(){
    const response = await getAllProducts();
    if(!response){
        throw new NotFoundError('Product');
    }
    return response;
}

async function deleteProductById(productId){
    // will be called by admin only
    const response = getProductByIdAndDelete(productId);
    if(!response){
        throw new NotFoundError('Product');
    }
    return response;
    
}

async function createProduct(productDetails){
    // will be called by admin only

    // check whether image is provided
    // if image is provided then it will be stored to cloudinary else the default image url will be attached

    const imagePath = productDetails.imagePath;
    if(imagePath){
        try{
            // Upload an image
            const uploadResult = await cloudinary.uploader.upload(imagePath);
            let imageUrl = uploadResult.secure_url;
            fs.unlink(process.cwd()+'/'+imagePath);
            console.log(uploadResult);
        }
        catch(error){
            console.log(error);
            throw new InternalServerError();
        }
    }
    else{
        imageUrl = defaultProductImage;
    }

    const product = await createProductRepo({
        ...productDetails,
        image : imageUrl
    });

    return product;
}

export {getAllProductsData, getProductById, createProduct, deleteProductById};