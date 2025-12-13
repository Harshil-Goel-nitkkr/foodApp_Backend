import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required:[true,"Product name is compulsary"],
        trim : true,
        minLength:[5,"product name should be atleast 5 char long"]
    },
    description:{
        type:String,
        required:[true,"Priduct description is compulsary"],
        trim:true,
        minLength:[10,"Description should be atleast 10 char long"],
    },
    image:{
        // stores the image url
        type:String,
        //default:"default product image",
    },
    quantity:{
        type:Number,
        required:[true,"quantity is required"],
        default:0,
    },
    price:{
        type:Number,
        required:[true,"price is required"],
    },
    category: {
        type: String,
        enum: ['veg', 'non-veg', 'drinks', 'sides'],
        default: 'veg'
    },
    inStock: {
        type: Boolean,
        required: [true, "In stock status is required"],
        default: true
    }
},{
    timestamps:true,
})

const product = mongoose.model("Product",productSchema);

export default product;