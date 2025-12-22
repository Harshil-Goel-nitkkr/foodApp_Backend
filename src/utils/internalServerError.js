import AppError from "./appError";

class InternalServerError extends AppError{
    constructor(){
        super("Server is not working properly, It's our problem",500);
    }
}

export default InternalServerError;