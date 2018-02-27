import { Document } from 'mongoose';

export interface User extends Document {
  readonly email: String,
  readonly username: String,
  readonly password: String,
  readonly passwordConf: String
}