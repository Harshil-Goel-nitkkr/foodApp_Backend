import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT;
const dbLink = process.env.DATA_BASE_LINK;
const securityKey = process.env.SECURITY_KEY;
const expiryTime = process.env.EXPITY_TIME;
const cloudinaryKey = process.env.CLOUDINARY_KEY;
const cloudinarySecret = process.env.CLOUDINARY_SECRET;
const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME;
const defaultProductImage = process.env.DEFAULT_PRODUCT_IMAGE_URL;
export {port,dbLink,securityKey,expiryTime,cloudinaryKey,cloudinarySecret,cloudinaryCloudName,defaultProductImage};