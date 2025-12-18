import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT;
const dbLink = process.env.DATA_BASE_LINK;
const securityKey = process.env.SECURITY_KEY;
const expiryTime = process.env.EXPITY_TIME;

export {port,dbLink,securityKey,expiryTime};