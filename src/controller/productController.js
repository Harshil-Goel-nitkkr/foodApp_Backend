import { createProduct, deleteProductById, getAllProductsData, getProductById } from "../service/productService";
import AppError from '../utils/appError'

async function addProduct(req,res){
    try{
        const product = await createProduct({
            productName: req.body.productName,
            description: req.body.description,
            image: req.file?.path,
            quantity: req.body.quantity,
            inStock: req.body.inStock,
            price: req.body.price,
            category: req.body.category
        });
        return res.status(201).json({
            success: true,
            data: product,
            error: {},
            message: "Product created successfully",
        });
    }
    catch(error){
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}

async function getProduct(req,res){
    try{
        const response = await getProductById(req.params.id);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "product fetched successfully"
        });
    }
    catch(error){
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}

async function getProducts(req,res){
    try{
        const response = await getAllProductsData();
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "products fetched successfully"
        });
    }
    catch(error){
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}

async function deleteProduct(req,resp){
    try{
        const response = await deleteProductById(req.params.id);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "successfully deleted the product"
        });
    }
    catch{
        if(error instanceof AppError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                data: {},
                error: error
            });
        }
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}

export {addProduct,getProducts,getProduct,deleteProduct};