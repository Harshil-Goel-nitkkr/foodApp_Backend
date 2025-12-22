import AppError from "./appError";

class NotFoundError extends AppError{
    constructor(resource){
        super(`${resource} not found`,404);
    }
}
export default NotFoundError;