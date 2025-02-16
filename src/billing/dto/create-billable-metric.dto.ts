import {
  IsString,
  IsBoolean,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class FilterDto {
  @IsString()
  key: string;

  @IsArray()
  values: string[];
}

export class CreateBillableMetricDto {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  aggregation_type: string;

  @IsBoolean()
  recurring: boolean;

  @IsString()
  field_name: string;

  @IsString()
  weighted_interval: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilterDto)
  filters?: FilterDto[];
}
