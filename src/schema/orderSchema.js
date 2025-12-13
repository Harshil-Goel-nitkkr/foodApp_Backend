import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                default:1
            }
        }
    ],
    address:{
        type:String,
        required:true,
        minLength:[15,"address should be atleast 15 char long"]
    },
    amount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["CANCELLED","ACCEPTED","REJECTED","DELIVERED","PROCESSING","OUT_FOR_DELIVERY"],
        default:"ACCEPTED"
    },
    paymentMode:{
        type:String,
        enum:["COD","PREPAID"],
        default:"COD",
    }
},{
    timestamps:true
})

const Order = mongoose.model("Order",orderSchema);

export default Order;