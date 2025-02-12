import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Client extends Document {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field(() => String)
  clientId: string;

  @Prop({ required: true })
  @Field(() => String)
  name: string;

  @Prop()
  @Field(() => Number, { nullable: true })
  balance: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
