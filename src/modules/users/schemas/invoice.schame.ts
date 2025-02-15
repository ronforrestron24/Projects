import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { Transaction } from './transaction.schema';

export type InvoiceDocument = Invoice & Document;

@Schema()
export class Invoice {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true })
  User: Types.ObjectId;

  @Prop({ required: true })
  Transaction: Transaction;

  @Prop({ required: true })
  Date: Date;

  @Prop({ required: true })
  Status: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
