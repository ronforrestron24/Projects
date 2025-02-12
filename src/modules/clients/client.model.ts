import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Client {
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
  balance?: number;
}

@InputType()
export class ClientInput {
  @Field(() => ID, { nullable: true })
  _id: string;

  @Field(() => String)
  clientId: string;

  @Field(() => String)
  name: string;

  @Field(() => Number, { nullable: true })
  balance?: number;
}

export type ClientDocument = Client & Document;
export const ClientSchema = SchemaFactory.createForClass(Client);
