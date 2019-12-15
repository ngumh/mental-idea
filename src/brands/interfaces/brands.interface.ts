import {Document} from 'mongoose';

export interface Brand extends Document {
    readonly brandname: String
    readonly founder: String
    readonly foundeddate: Date
    readonly description: String
    readonly headquarters: String
}