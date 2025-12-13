import mongoose from "mongoose"

// password is saved without encrypting

const userSchema = new mongoose.schema({
    firstName : {
        type:String,
        required:[true,"First name should be provided"],
        minLength:[5,"First name should be atleast 5 character long"],
        trim:true,
        maxLength:[16,"First name should be atmost 16 character long"],
        lowerCase:true,
        // regex can also be used
    },
    lastName:{
        type:String,
        minLength:[5,"Last name should be atleast 5 character long"],
        trim:true,
        maxLength:[16,"Last name should be atmost 16 character long"],
        lowerCase:true,
        // regex can also be used
    },
    mobileNo:{
        type:String,
        trim:true,
        required:[true,"Mobile number should be provided"],
        minLength:[10,"Mobile mumber should be of 10 digits"],
        minLength:[10,"Mobile mumber should be of 10 digits"],
        unique:[true,"mobile number alread in use"]
        // regex can also be used
    },
    email:{
        type:String,
        trim:true,
        required:[true,"Email should be provided"],
        unique:[true,"Email already registered"],
        match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Invalid email"]
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minLength:[8,"password should be atleast 8 character long"]
    },
    address:{
        type:String
    },
    role:{
        type:String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
},{
    timestamps: true,
});

const user = mongoose.model("User",userSchema);

export default user;