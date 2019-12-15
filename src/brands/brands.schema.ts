import * as mongoose from 'mongoose';

export const BrandSchema = new mongoose.Schema({
    brandname: String,
    founder: String,
    foundeddate: Date,
    description: String,
    headquarters: String
})