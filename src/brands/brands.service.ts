import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from './interfaces/brands.interface';
import { BrandInput } from './inputs/brand.input';

@Injectable()
export class BrandsService {
  constructor(@InjectModel('Brand') private readonly brandModel: Model<Brand>) {}

  async create(CreateBrandDto: BrandInput): Promise<Brand> {
    const createdBrand = new this.brandModel(CreateBrandDto);
    return await createdBrand.save();
  }

  async findAll(): Promise<Brand[]> {
    return await this.brandModel.find().exec();
  }
}
