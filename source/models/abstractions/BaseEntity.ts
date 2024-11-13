import { Model, DataTypes } from 'sequelize';

export abstract class BaseEntity extends Model {
    public id!: string;
}
