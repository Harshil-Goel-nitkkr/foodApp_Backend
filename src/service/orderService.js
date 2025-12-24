import { clearCart, getCartByUserId } from "../repository/cartRepository";
import NotFoundError from "../utils/notFoundError";
import {findUser} from '../repository/userRepository'
import { createOrder as createOrderRepo, updateOrderStatus,getOrderByOrderId, getOrdersByUserId } from "../repository/orderRepository";

async function createOrder(userId, paymentMethod){
    const cart = await getCartByUserId(userId);
    const user = await findUser({userId});
    if(!cart){
        throw new NotFoundError("cart");
    }
    if(cart.items.length == 0){
        throw new BadRequestError(["the cart is empty"]);
    }
    const orderObject = {
        user: userId,
        address : user.address,
        paymentMode: paymentMethod,
        status: "ORDERED",
        amount: 0,
    }

    cart.items.foreach((item)=>orderObject.amount += item.quantity * item.product.price);
    orderObject.items = cart.items.map(item => {
        return {
            product: item.product._id, 
            quantity: item.quantity
        };
    });

    const order = await createOrderRepo(orderObject)
    if(!order){
        throw new InternalServerError();
    }
    await clearCart();
    return order;
}

async function getAllOrdersByUserId(userId){
    const response = await getOrdersByUserId(userId);
    if(!response){
        throw new NotFoundError('Orders');
    }
    return response;
}

async function getOrderDetialsById(orderId){
    const response = await getOrderByOrderId(orderId);
    if(!response){
        throw new NotFoundError('Order');
    }
    return response;
}

async function updateStatus(orderId,status){
    const response = await updateOrderStatus(orderId,status);
    if(!response){
        throw new NotFoundError('Order');
    }
    return response;
}

export {
    createOrder,
    getAllOrdersByUserId,
    getOrderDetialsById,
    updateStatus
};