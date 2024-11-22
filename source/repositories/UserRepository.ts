import { User } from '../models/User';
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {

    public async save(data: Partial<User>): Promise<User> {
        try {
            return await User.create(data);
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    public async findById(id: number): Promise<User | null> {
        try {
            return await User.findByPk(id);
        } catch (error) {
            console.error('Error finding user by ID:', error);
            throw error;
        }
    }

    public async findByEmail(email: string): Promise<User | null> {
        try {
            return await User.findOne({ where: { email } });
        } catch (error) {
            console.error('Error finding user by email:', error);
            throw error;
        }
    }

    public async findAll(): Promise<User[]> {
        try {
            return await User.findAll();
        } catch (error) {
            console.error('Error retrieving all users:', error);
            throw error;
        }
    }

    public async update(id: number, data: Partial<User>): Promise<[number, User[]]> {
        try {
            return await User.update(data, { where: { id }, returning: true });
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    public async delete(id: number): Promise<number> {
        try {
            return await User.destroy({ where: { id } });
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
}
