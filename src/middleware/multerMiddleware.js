import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, 'uploads/');
    },
    filename: (req, file, next) => {
        next(null, file.originalname);
    }
});

const uploader =  multer({ storage });;

export default uploader;