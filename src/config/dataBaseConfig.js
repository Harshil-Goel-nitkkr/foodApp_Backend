import mongoose from 'mongoose';
import {dbLink} from './serverConfig.js';

// function to establish connection with database
export default async function(){
    try{
        mongoose.connect(dbLink);
        console.log("connected to dataBase");
    }
    catch(error){
        console.log("Unable to connect ot dataBase");
        console.log(error);
    }
}