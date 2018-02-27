import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import * as mongoose from 'mongoose';
@Component()
export class AuthService {
  async createToken() {
    console.log('hello')
    const expiresIn = 60 * 60, secretOrKey = 'secret';
    const user = { email: 'user@user.com' };
    const token = jwt.sign(user, secretOrKey, { expiresIn });
    return {
      expires_in: expiresIn,
      access_token: token,
    };
  }

  async validateUser(signedUser): Promise<boolean> {
    // put some validation logic here
    // for example query user by id / email / username
    // let valid =
    return false;
  }
}