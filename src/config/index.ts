import configDev from "./config.dev.json";
import configProd from "./config.prod.json";

interface Config {
    API_URL: string,
    APP_URL: string
}

const config: Config = ((process.env.NODE_ENV === "production") ? configProd : configDev) as Config;
export default config;