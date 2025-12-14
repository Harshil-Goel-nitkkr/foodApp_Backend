import express from 'express';
import {port} from './config/serverConfig.js'
import connectDb from './config/dataBaseConfig.js'
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import authRouter from './routes/authRoutes.js';
const app = express();

app.listen(port,async() => {
    await connectDb();
    console.log("running on port " + port);
})

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/orders',orderRouter);
app.use('/carts',cartRouter);
app.use('/auth',authRouter);
app.get('/ping',(req,res)=>{
    console.log(req.body);
    return res.json({
        msg : "pong"
    });
})
