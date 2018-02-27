import * as mongoose from 'mongoose';

export const DogSchema = new mongoose.Schema({
    name: String,
    breed: String,
    weight: Number,
    height: Number,
});