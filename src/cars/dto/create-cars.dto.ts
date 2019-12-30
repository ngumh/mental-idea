import {ObjectType, Field, ID, Int} from 'type-graphql'

@ObjectType()
export class CarType {
    @Field(() => ID)
    readonly id: String
    @Field()
    readonly name: String
    @Field(() => Int)
    readonly price: Number
    @Field()
    readonly brand: String
}