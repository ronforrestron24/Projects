import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true, unique: true })
  external_id: string;

  @Prop()
  address_line1: string;

  @Prop()
  city: string;

  @Prop()
  currency: string;

  @Prop()
  country: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  legal_name: string;

  @Prop()
  legal_number: string;

  @Prop()
  tax_identification_number: string;

  @Prop()
  logo_url: string;

  @Prop({ required: true })
  name: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
