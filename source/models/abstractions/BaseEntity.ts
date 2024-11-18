import { Model, Column, DataType } from 'sequelize-typescript';

export abstract class BaseEntity extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false
    })
    public id!: string;
}
