import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CarSchema} from './cars.schema'
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])],
    providers: [CarsResolver, CarsService],
})
export class CarsModule {
}
