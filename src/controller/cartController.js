import { clearProductsFromCart, getCart, modifyCart } from "../service/cartService";
import {AppError} from '../utils/appError';

async function modifyProductToCart(req,res){
    try{
        const response = await modifyCart(req.user.id, req.body.productId, req.body.shouldAdd);
        return res.status(201).status({
            success: true,
            data: response,
            error: {},
            message: "cart modified successfully"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                data: {},
                error: error,
                message: error.message
            });
        }
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: "unknown error occurred"
        });
    }
}

async function getCartByUserId(req,res){
    try{
        const response = await getCart(req.user.id);
        return res.status(201).status({
            success: true,
            data: response,
            error: {},
            message: "cart fetched successfully"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                data: {},
                error: error,
                message: error.message
            });
        }
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: "unknown error occurred"
        });
    }
}

async function clearCartById(req,res){
    try{
        const response = await clearProductsFromCart(req.user.id);
        return res.status(201).status({
            success: true,
            data: response,
            error: {},
            message: "cart cleared successfully"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                data: {},
                error: error,
                message: error.message
            });
        }
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: "unknown error occurred"
        });
    }
}

export {modifyProductToCart,clearCartById,getCartByUserId};