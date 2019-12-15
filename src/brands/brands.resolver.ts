import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import {BrandsService} from "./brands.service"
import { BrandType } from "./dto/create-brands.dto";
import { BrandInput } from "./inputs/brand.input";
@Resolver()
export class BrandsResolver {
  constructor(
    private readonly BrandsService: BrandsService,
  ) {}

  @Query(() => String)
  async hello() {
    return 'Mic Check 1 2';
  }

  @Query(() => [BrandType])
  async brands(){
    return this.BrandsService.findAll();
  }
  @Mutation( () => BrandType)
  async createBrand(@Args('input') input: BrandInput){
      return this.BrandsService.create(input);
  }
}