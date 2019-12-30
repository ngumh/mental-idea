import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { CarInput } from './inputs/car.input';
import { Car } from './interfaces/cars.interface';
@Injectable()
export class CarsService {

    constructor(
        @InjectModel('Car') private readonly carModel: Model<Car>,
    ){}
    async create(createCarDto: CarInput): Promise<Car> {
        const createdCar = new this.carModel(createCarDto);
        return await createdCar.save();
    }
    async findAll(): Promise<Car[]>{

    return await this.carModel.find().exec()

    }
}
