import express from 'express';
import {port} from './config/serverConfig.js'
import connectDb from './config/dataBaseConfig.js'
const app = express();

app.listen(port,async() => {
    await connectDb();
    console.log("running on port " + port);
})