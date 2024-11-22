import { User } from '../models/User';

export interface IUserService {
    create(data: Partial<User>): Promise<User>;
    getById(id: number): Promise<User>;
    getByEmail(email: string): Promise<User>;
    getAll(): Promise<User[]>;
    update(id: number, data: Partial<User>): Promise<User | null>;
    delete(id: number): Promise<boolean>;
}
