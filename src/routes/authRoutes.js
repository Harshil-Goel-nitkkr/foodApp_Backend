import express from 'express';
import { logIn, logOut } from '../controller/authController';

const authRouter = express.Router();

authRouter.post('/login',logIn);
authRouter.post('/logout',logOut);

export default authRouter;