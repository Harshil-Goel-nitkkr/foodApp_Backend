import dotenv from 'dotenv'

dotenv.config();
const port = process.env.PORT;
const dbLink = process.env.DATA_BASE_LINK;
export {port,dbLink}