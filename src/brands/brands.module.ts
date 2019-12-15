import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {BrandsResolver} from './brands.resolver';
import { BrandSchema } from './brands.schema';
import {BrandsService} from './brands.service';
@Module({
    imports: [MongooseModule.forFeature([{ name: 'Brand', schema: BrandSchema }])],
    providers: [BrandsResolver,BrandsService],
})
export class BrandsModule {}
