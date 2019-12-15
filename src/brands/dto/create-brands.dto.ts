import {ObjectType, Field, ID} from 'type-graphql'

@ObjectType()
export class BrandType {
    @Field(() => ID)
    readonly id: String
    @Field()
    readonly brandname: String
    @Field()
    readonly founder: String
    @Field()
    readonly foundeddate: Date
    @Field()
    readonly description: String
    @Field()
    readonly headquarters: String
}