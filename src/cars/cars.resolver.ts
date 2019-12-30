import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import {CarsService} from './cars.service'
import { CarType } from './dto/create-cars.dto';
import { CarInput } from './inputs/car.input';
@Resolver('Cars')
export class CarsResolver {
    constructor (
        private readonly CarService :CarsService 
    ){}
    @Query(() => String)
    async bonjour(){
        return "So what"
    }
    @Query(() => [CarType])
    async cars() {
        return this.CarService.findAll();
    }
    @Mutation(() => CarType)
    async createCar(@Args('input') input: CarInput) {
        return this.CarService.create(input);
    }
}
