import dotenv from "dotenv";
dotenv.config();
const config = {
  BASE_URL: process.env.API_URL,
};

export default config;
