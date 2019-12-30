import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BrandsModule} from './brands/brands.module'
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [
    CarsModule,
    BrandsModule,
    GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/carsshow'),
    CarsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
