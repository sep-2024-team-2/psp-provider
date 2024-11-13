import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import dotenv from "dotenv";
import { JwtPayload } from "jsonwebtoken";

dotenv.config();
const { JWT_SECRET = "" } = process.env;

export class Encrypt {
    static async hashPassword(password: string) {
        return bcryptjs.hashSync(password, 12);
    }

    static comparePassword(password: string, hashPassword: string) {
        return bcryptjs.compareSync(password, hashPassword);
    }

    static generateToken(payload: JwtPayload) {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    }


    static validateToken(token: string): JwtPayload {
        try {
            const secretKey: string = process.env.JWT_SECRET || "";
            return jwt.verify(token, secretKey) as JwtPayload;
        } catch (err) {
            throw new Error(`Token validation failed: ${err}`);
        }
    }
}
