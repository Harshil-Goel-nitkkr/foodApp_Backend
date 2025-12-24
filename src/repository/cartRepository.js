import Cart from '../schema/cartSchema'

// errors are not handeled properly
// in clear cart function some custom error is to be thrown (mentioned in comment)

async function createCart(UserId){
    try{
        const resp = await Cart.create({
            user : UserId
        });
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function getCartByUserId(userId){
    try{
        const resp = await Cart.findOne({user:userId}).populate('items.product');
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

async function clearCart(userId){
    try{
        const resp = await Cart.findOne({user : userId});
        if(!resp){
            throw new error;
        }
        resp.items = [];
        await resp.save();
        return resp;
    }
    catch(error){
        console.log(error);
    }
}

export {getCartByUserId, clearCart, createCart};