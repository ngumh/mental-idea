import { InputType, Field } from 'type-graphql'

@InputType()
export class BrandInput{
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