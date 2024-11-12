import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from "@sequelize/postgres";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    ssl: false,
    clientMinMessages: process.env.DB_CLIENT_MESSAGE
}
);

export default sequelize;