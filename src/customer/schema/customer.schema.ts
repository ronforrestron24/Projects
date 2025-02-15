import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
  @Prop({ required: true, unique: true })
  external_id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Object })
  address_line1: string;

  @Prop({ type: Object })
  address_line2: string;

  @Prop({ type: String })
  city: string;

  @Prop({ type: String })
  country: string;

  @Prop({ type: String })
  currency: string;

  @Prop({ type: String })
  legal_name: string;

  @Prop({ type: String })
  legal_number: string;

  @Prop({ type: String })
  logo_url: string;

  @Prop({ type: String })
  firstname: string;

  @Prop({ type: String })
  lastname: string;

  @Prop({ type: String })
  account_type: string;

  @Prop({ type: String })
  customer_type: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: String })
  state: string;

  @Prop({ type: [String] })
  tax_codes: string[];

  @Prop({ type: String })
  tax_identification_number: string;

  @Prop({ type: String })
  timezone: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: String })
  zipcode: string;

  @Prop({ type: Number })
  net_payment_term: number;

  @Prop({ type: String })
  finalize_zero_amount_invoice: string;

  @Prop({ type: Object })
  billing_configuration: Record<string, any>;

  @Prop({ type: Object })
  shipping_address: Record<string, any>;

  @Prop({ type: [Object] })
  integration_customers: Record<string, any>[];

  @Prop({ type: [Object] })
  metadata: Record<string, any>[];

  @Prop({ type: Boolean })
  skip_invoice_custom_sections: boolean;

  @Prop({ type: [String] })
  invoice_custom_section_codes: string[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
