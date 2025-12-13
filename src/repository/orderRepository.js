import Order from '../schema/orderSchema'

//errors are not handeled properly

async function createOrder(orderDetails){
    try{
        const resp = await Order.create(orderDetails);
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function getOrderByOrderId(orderId){
    try{
        const resp = await Order.findById(orderId).populate('items.product');
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function getOrdersByUserId(userId){
    try{
        const resp = await Order.find({user:userId}).populate('items.product');
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function updateOrderStatus(OrderId,status){
    try{
        const resp = await Order.findOneAndUpdate(userId,{status:status},{new:true});
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

export {createOrder, getOrderByOrderId, getOrdersByUserId, updateOrderStatus};