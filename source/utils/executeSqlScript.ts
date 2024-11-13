import fs from "fs";
import path from "path";
import sequelize from "../config/database";

export const executeSqlScript = async (scriptFileName: string): Promise<void> => {
    const sqlFilePath = path.join(process.cwd(), scriptFileName);

    try {
        // Read the SQL script file content
        const sqlQuery = fs.readFileSync(sqlFilePath, "utf8");

        // Execute the SQL script using Sequelize
        await sequelize.query(sqlQuery);
        console.log("SQL script executed successfully.");
    } catch (error) {
        console.error("Error executing SQL script:", error);
    }
};
