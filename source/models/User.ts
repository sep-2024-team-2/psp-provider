import { Table, Column, DataType, AllowNull, Unique } from 'sequelize-typescript';
import { BaseEntity} from "./abstractions/BaseEntity";

@Table({ tableName: 'users', timestamps: false })
export class User extends BaseEntity {

    @AllowNull(false)
    @Column(DataType.STRING)
    public firstName!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public lastName!: string;

    @AllowNull(false)
    @Unique('email')
    @Column(DataType.STRING)
    public email!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    public password!: string;
}
