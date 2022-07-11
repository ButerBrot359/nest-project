import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString({ message: "Must be a string" })
  @ApiProperty({ example: "example@mail.com", description: "User's email" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;

  @IsString({ message: "Must be a string" })
  @Length(4, 16, {
    message: "Length of password must be between 4 and 16 symbols",
  })
  @ApiProperty({ example: "Qwe123", description: "User's password" })
  readonly password: string;
}
