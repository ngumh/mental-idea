import { InputType, Field, Int } from 'type-graphql'
import { BrandInput } from 'src/brands/inputs/brand.input'

@InputType()
export class CarInput{
    @Field()
    readonly name: String
    @Field(() => Int)
    readonly price: Number 
    @Field()
    readonly brand: String
}