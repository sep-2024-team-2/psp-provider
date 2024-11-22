import { User } from '../models/User';

export interface IUserRepository {
    save(data: Partial<User>): Promise<User>;
    findById(id: number): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(id: number, data: Partial<User>): Promise<[number, User[]]>;
    delete(id: number): Promise<number>;
}
