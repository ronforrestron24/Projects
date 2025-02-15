import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BillableMetric extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  code?: string;

  @Prop()
  description?: string;

  @Prop({ default: false })
  recurring: boolean;

  @Prop()
  expression?: string;

  @Prop()
  rounding_function?: string;

  @Prop()
  rounding_precision?: number;

  @Prop()
  field_name?: string;

  @Prop()
  aggregation_type?: string;

  @Prop()
  weighted_interval?: string;

  @Prop({ type: [{ key: String, value: String }] })
  filters?: Record<string, string>[];
}

export const BillableMetricSchema =
  SchemaFactory.createForClass(BillableMetric);
