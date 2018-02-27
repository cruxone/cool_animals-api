import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
    name: String,
    password: String
});