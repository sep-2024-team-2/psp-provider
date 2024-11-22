import { Controller, Get, Post, Body, Param, Query, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { IUserService } from '../services/IUserService';
import { User } from '../models/User';
import { CreateUserDto } from "../dtos/CreateUserDto";

@ApiTags('users')
@Controller('api/users')
export class UserController {
    constructor(private readonly userService: IUserService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User successfully created', type: User })
    @ApiResponse({ status: 500, description: 'Error creating user' })
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a user by ID' })
    @ApiParam({ name: 'id', type: 'integer', description: 'User ID' })
    @ApiResponse({ status: 200, description: 'User found', type: User })
    @ApiResponse({ status: 404, description: 'User not found' })
    async getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.getById(id);
    }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'List of users', type: [User] })
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get('email')
    @ApiOperation({ summary: 'Get a user by email' })
    @ApiQuery({ name: 'email', type: String, description: 'User email' })
    @ApiResponse({ status: 200, description: 'User found', type: User })
    @ApiResponse({ status: 404, description: 'User not found' })
    async getUserByEmail(@Query('email') email: string): Promise<User> {
        return this.userService.getByEmail(email);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a user by ID' })
    @ApiParam({ name: 'id', type: 'integer', description: 'User ID' })
    @ApiResponse({ status: 200, description: 'User successfully deleted' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async deleteUser(@Param('id') id: number): Promise<void> {
        await this.userService.delete(id);
    }
}
