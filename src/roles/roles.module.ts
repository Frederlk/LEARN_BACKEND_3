import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { Role } from "./users.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [SequelizeModule.forFeature([Role])],
})
export class RolesModule {}
