import { IsString, IsEmail, IsNotEmpty, Length, IsAlpha } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ description: 'The first name of the user' })
    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    firstName!: string;

    @ApiProperty({ description: 'The last name of the user' })
    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    lastName!: string;

    @ApiProperty({ description: 'The email address of the user' })
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @ApiProperty({ description: 'The password of the user' })
    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password!: string;
}
