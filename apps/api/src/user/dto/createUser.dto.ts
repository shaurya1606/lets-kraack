import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

// for validation of user creation data

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
    @IsString()
    role: string;
}