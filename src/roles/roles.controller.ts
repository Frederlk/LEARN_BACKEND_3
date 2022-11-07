import { CreateRoleDto } from "./dto/create-role.dto";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";

@Controller("roles")
export class RolesController {
    constructor(private roleService: RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @Get(`/:value`)
    getByValue(@Param("value") value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
