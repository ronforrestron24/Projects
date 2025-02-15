import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  User: Types.ObjectId;

  @Prop({ required: true })
  Amount: number;

  @Prop({ required: true })
  Date: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
