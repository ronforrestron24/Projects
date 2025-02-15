import {
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  IsBoolean,
  IsNumber,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsString()
  external_id: string;

  @IsString()
  address_line1: string;

  @IsString()
  address_line2: string;

  @IsString()
  city: string;

  @IsString()
  country: string;

  @IsString()
  currency: string;

  @IsEmail()
  email: string;

  @IsString()
  legal_name: string;

  @IsString()
  legal_number: string;

  @IsString()
  logo_url: string;

  @IsString()
  name: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  account_type: string;

  @IsString()
  customer_type: string;

  @IsString()
  phone: string;

  @IsString()
  state: string;

  @IsArray()
  @IsString({ each: true })
  tax_codes: string[];

  @IsString()
  tax_identification_number: string;

  @IsString()
  timezone: string;

  @IsString()
  url: string;

  @IsString()
  zipcode: string;

  @IsNumber()
  net_payment_term: number;

  @IsString()
  finalize_zero_amount_invoice: string;

  @IsObject()
  billing_configuration: Record<string, any>;

  @IsObject()
  shipping_address: Record<string, any>;

  @IsArray()
  @IsObject({ each: true })
  integration_customers: Record<string, any>[];

  @IsArray()
  @IsObject({ each: true })
  metadata: Record<string, any>[];

  @IsBoolean()
  skip_invoice_custom_sections: boolean;

  @IsArray()
  @IsString({ each: true })
  invoice_custom_section_codes: string[];
}
