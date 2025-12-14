import express from 'express';
import {isAdmin, isLoggedIn} from '../validators/authValidator';
import {createOrder,getOrderByOrderId,getOrdersByUserId,updateOrderStatus,cancelOrder} from '../controller/orderController';

const orderRouter = express.Router();

orderRouter.post('/',isLoggedIn,createOrder);

orderRouter.get('/:orderId',isLoggedIn,getOrderByOrderId);

orderRouter.get('/',isLoggedIn,getOrdersByUserId);

orderRouter.put('/:orderId/cancel',isLoggedIn,cancelOrder);

orderRouter.put('/:orderId/status',isLoggedIn,isAdmin,updateOrderStatus);

export default orderRouter;