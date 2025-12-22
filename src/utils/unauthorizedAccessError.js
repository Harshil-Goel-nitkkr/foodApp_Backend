import AppError from "./appError";

class UnauthorizedAccessError extends AppError{
    constructor(){
        super("User is not authorized properly",401);
    }
}

export default UnauthorizedAccessError;