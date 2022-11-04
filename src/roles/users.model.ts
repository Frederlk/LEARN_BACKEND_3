import { ApiProperty } from "@nestjs/swagger";
import { Model, DataType, Column, Table } from "sequelize-typescript";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({ example: "1", description: "Unique ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: "ADMIN", description: "User role value" })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: "Admin description", description: "Role description" })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string;
}
