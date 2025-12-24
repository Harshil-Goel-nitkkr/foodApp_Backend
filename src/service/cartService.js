import { clearCart, getCartByUserId } from "../repository/cartRepository";
import { getProductById } from "../repository/productRepository";
import {NotFoundError} from '../utils/notFoundError'
import {BadRequestError} from '../utils/badRequestError'

async function getCart(userId){
    const cart = await getCartByUserId(userId);
    if(!cart){
        throw new NotFoundError("cart");
    };
    return cart;
}

async function clearProductsFromCart(userId){
    const response = await clearCart(userId);
    if(!response){
        throw new NotFoundError("cart");
    }
    return response;
}

async function modifyCart(userId, productId, shouldAdd=true){
    const cart= await getCartByUserId(userId);
    if(!cart){
        throw new NotFoundError('cart');
    };
    const product = await getProductById(productId);
    if(!product){
        throw new NotFoundError('product');
    }
    if(shouldAdd && !product.inStock && product.quantity <= 0){
        throw new BadRequestError("product is not available in stock")
    }
    let foundProduct = false;
    cart.items.forEach(item=>{
        if(item.product._id == productId){
            if(shouldAdd){
                item.quantity += 1;
                foundProduct = true;
            }
            else{
                if(item.quantity > 0){
                    item.quantity -= 1;
                    if(item.quantity == 0){
                        cart.items = cart.items.filter((item)=> item.product._id != productId);
                    }
                    foundProduct = true;
                }
                else{
                    throw new BadRequestError("product is not in cart");
                }
            }
        }
    });

    if(!foundProduct){
        if(!shouldAdd){
            throw new BadRequestError("product is not available in the cart");
        }
        cart.items.push({
            product : productId,
            quantity: 1,
        });
    }
    await cart.save();
    return cart;

}

export {getCart,modifyCart, clearProductsFromCart};