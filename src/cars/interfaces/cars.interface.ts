import {Document} from 'mongoose';

export interface Car extends Document {
    readonly name: String
    readonly price: Number
    readonly brand: String
}