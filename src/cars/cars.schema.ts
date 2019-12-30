import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    name: String,
    price: String,
    brand: {type: mongoose.Schema.Types.ObjectId, ref: 'Brand'}
})