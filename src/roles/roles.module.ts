import { Module } from "@nestjs/common";
import { RolesController } from "./roles.controller";
import { Role } from "./roles.model";
import { RolesService } from "./roles.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.models";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UserRoles])],
  exports: [RolesService],
})
export class RolesModule {}
