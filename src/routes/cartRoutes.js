import express from 'express';
import { isLoggedIn } from '../validators/authValidator';
import {modifyProductToCart,clearCartById,getCartByUserId} from '../controller/cartController';
const cartRouter = express.Router();

cartRouter.get('/',isLoggedIn,getCartByUserId);

cartRouter.post('/:operation/:productId', isLoggedIn, modifyProductToCart);

cartRouter.delete('/products', clearCartById);

export default cartRouter;