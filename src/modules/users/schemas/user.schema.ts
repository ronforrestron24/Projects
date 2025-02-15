import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  Email: string;

  @Prop({ required: true })
  Password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
