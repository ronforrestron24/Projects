import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  Email: string;

  @Prop({ required: true })
  Password: string;

  @Prop({ required: true })
  Name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
