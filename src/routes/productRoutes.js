import express from 'express'
import {getProductByProductId,getProductsByUserId,addProduct,deleteProduct, getProductByProductId} from '../controller/productController'
import {isAdmin,isLoggedIn} from '../validators/authValidator';
import uploader from '../middleware/multerMiddleware'

const productRouter = express.Router();

// the access to create a new product is to be given to admin only
// adding validation middlewares accordingly
// image files should be saved using multer (adding middleware for it)
productRouter.post('/',isLoggedIn,isAdmin,uploader.single('productImage'),addProduct);

productRouter.get('/:id',getProductByProductId);
productRouter.get('/',getProductsByUserId);

// the access to delete product is to be given to admin only
// adding validation middlewares accordingly
productRouter.delete('/:id',isLoggedIn,isAdmin,deleteProduct);

export default productRouter;

