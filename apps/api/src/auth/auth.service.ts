import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { verify } from 'argon2';
import { AuthJwtPayload } from './types/auth.jwtPayload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async registerUser(createUserDto: CreateUserDto) {
        // Logic to register user
        const user = await this.userService.findByEmail(createUserDto.email);
        if (user) {
            throw new ConflictException('User already exists');
        }
        return this.userService.create(createUserDto);
    }

    async validateLocalUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if(!user) throw new UnauthorizedException('User not found!');
        const isPasswordMatched = await verify(user.hashedPw, password);
        if(!isPasswordMatched)
            throw new UnauthorizedException('Invalid Credentials!');

        return { id: user.id, name: user.name };
    }
    async login(userId:number, name?:string) {
        const { accessToken } = await this.generateToken(userId);
        return { id: userId, name, accessToken };
    }

    async generateToken(userId:number){
        const payload: AuthJwtPayload = {
            sub: userId
        };
        const [accessToken] = await Promise.all(
            [
                this.jwtService.signAsync(payload),
            ]
        );
        return { accessToken };
    }
}

