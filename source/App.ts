import express, { Application } from "express";
import http from "http";
import sequelize from "./config/database";
import {executeSqlScript} from "./utils/executeSqlScript";

class App {
    public app: Application;
    public server: http.Server;

    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
    }

    public async init() {
        await this.connectToDatabase();
        await this.executeInitialData();
    }

    private async connectToDatabase() {
        try {
            await sequelize.authenticate();
            console.log("Database connection has been established successfully.");

            await sequelize.sync({ alter: true });

            console.log("All models were synchronized successfully.");
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }

    private async executeInitialData() {
        try {
            await executeSqlScript("data.sql");
        } catch (error) {
            console.error("Error executing initial data script:", error);
        }
    }

    public start(port: number) {
        this.server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
}

export default App;
