import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UserSchema } from './schemas/user.schema';

@Component()
export class UserService {
  constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {

    // salt/hash pw then save to model, then save. 
    const createdUser = new this.userModel(createUserDto);
    console.log(createUserDto)
    return await createdUser.save();
  }
}