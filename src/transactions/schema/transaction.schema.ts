import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ required: true })
  external_customer_id: string;

  @Prop({ required: true })
  amount_cents: number;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
