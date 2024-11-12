import App from "./App";
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 3000;
const app = new App();

(async () => {
    await app.init();
    app.start(Number(PORT));
})();
