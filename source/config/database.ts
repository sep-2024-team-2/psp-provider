import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { initializeUserSchema } from "./schemas/userSchema";

dotenv.config();

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    ssl: false,
});

initializeUserSchema(sequelize);

export default sequelize;
