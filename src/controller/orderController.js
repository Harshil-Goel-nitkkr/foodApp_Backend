import { createOrder as createOrderService, getAllOrdersByUserId, getOrderDetialsById, updateStatus } from "../service/orderService";

async function createOrder(req,res){
    try{
        const response = await createOrderservice(req.user.id, req.body.paymentMethod);
        return res.status(201).json({
            success: true,
            data: response,
            error:{},
            message: "Order places successfully"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.satuts(error.statusCode).json({
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
            message: "Something went wrong"
        })
    }
}

async function getOrderByOrderId(req,res){
    try{
        const response = await getOrderDetialsById(req.params.orderOd);
        return res.status(201).json({
            success: true,
            data: response,
            error:{},
            message: "Order fetched successfully"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.satuts(error.statusCode).json({
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
            message: "Something went wrong"
        })
    }
}

async function getOrdersByUserId(req,res){
    try{
        const response = await getAllOrdersByUserId(req.user.id);
        return res.status(201).json({
            success: true,
            data: response,
            error:{},
            message: "Orders fetched successfully"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.satuts(error.statusCode).json({
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
            message: "Something went wrong"
        })
    }
}

async function updateOrderStatus(req,res){
    try{
        const response = await updateStatus(req.params.orderId,req.body.productStatus)
        return res.status(201).json({
            success: true,
            data: response,
            error:{},
            message: "statusUpdated"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.satuts(error.statusCode).json({
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
            message: "Something went wrong"
        })
    }
}

async function cancelOrder(req,res){
    try{
        const response = await updateStatus(req.params.orderId,"CANCELLED");
        return res.status(201).json({
            success: true,
            data: response,
            error:{},
            message: "order cancelled"
        });
    }
    catch(error){
        if(error instanceof AppError){
            return res.satuts(error.statusCode).json({
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
            message: "Something went wrong"
        })
    }
}

export {cancelOrder,createOrder,updateOrderStatus, getOrderByOrderId,getOrdersByUserId}