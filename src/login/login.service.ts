import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './interfaces/login.interface';
import { LoginDto } from './dto/login.dto';
import { LoginSchema } from './schemas/login.schema';

@Component()
export class LoginService {
  constructor(@InjectModel(LoginSchema) private readonly loginModel: Model<Login>) {}

  async login(loginDto: LoginDto): Promise<Login> {
    const login = new this.loginModel(loginDto);
    return await this.loginModel.find().exec();
  }
}