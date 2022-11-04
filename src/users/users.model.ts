import { ApiProperty } from "@nestjs/swagger";
import { Model, DataType, Column, Table } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: "1", description: "Unique ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "user@gmail.com", description: "Email" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: "qwerty12345", description: "Password" })
    @Column({ type: DataType.STRING, unique: false })
    password: string;

    @ApiProperty({ example: "true", description: "Banned or not" })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: "Curse word", description: "Ban purpose" })
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;
}
