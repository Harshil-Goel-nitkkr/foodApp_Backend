
// implementation of functions is pending

async function createOrder(req,res){
    console.log("order created");
}

async function getOrderByOrderId(req,res){
    console.log("get the order of given id");
}

async function getOrdersByUserId(req,res){
    console.log("get the orders of given user");
}

async function updateOrderStatus(req,res){
    console.log("status of given order updated");
}

async function cancelOrder(req,res){
    console.log("given order cancelled");
}

export {cancelOrder,createOrder,updateOrderStatus, getOrderByOrderId,getOrdersByUserId}