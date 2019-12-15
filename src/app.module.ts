import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BrandsModule} from './brands/brands.module'

@Module({
  imports: [
    BrandsModule,
    GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/carsshow')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
