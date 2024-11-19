/* eslint-disable no-undef */
import dotEnv from "dotenv";

dotEnv.config();
const AppConfig = {
    PORT: process.env.PORT || 5000,
};

export default AppConfig;
