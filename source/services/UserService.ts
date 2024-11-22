import { IUserService } from './IUserService';
import { IUserRepository} from "../repositories/IUserRepository";
import { User } from '../models/User';
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService implements IUserService {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    public async create(data: Partial<User>): Promise<User> {
        try {
            return await this.userRepository.save(data);
        } catch (error) {
            console.error('Error creating user in service:', error);
            throw error;
        }
    }


    public async getById(id: number): Promise<User> {
        try {
            const user = await this.userRepository.findById(id);
            if (!user) {
                throw new Error(`User with ID ${id} not found`);
            }
            return user;
        } catch (error) {
            console.error('Error retrieving user by ID in service:', error);
            throw error;
        }
    }

    public async getByEmail(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findByEmail(email);
            if (!user) {
                throw new Error(`User with email ${email} not found`);
            }
            return user;
        } catch (error) {
            console.error('Error retrieving user by email in service:', error);
            throw error;
        }
    }

    public async getAll(): Promise<User[]> {
        try {
            return await this.userRepository.findAll();
        } catch (error) {
            console.error('Error retrieving all users in service:', error);
            throw error;
        }
    }

    public async update(id: number, data: Partial<User>): Promise<User | null> {
        try {
            const [rowsUpdated, updatedUsers] = await this.userRepository.update(id, data);
            return rowsUpdated > 0 ? updatedUsers[0] : null;
        } catch (error) {
            console.error('Error updating user in service:', error);
            throw error;
        }
    }

    public async delete(id: number): Promise<boolean> {
        try {
            const rowsDeleted = await this.userRepository.delete(id);
            return rowsDeleted > 0;
        } catch (error) {
            console.error('Error deleting user in service:', error);
            throw error;
        }
    }
}
