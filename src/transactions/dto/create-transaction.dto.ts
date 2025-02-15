import { IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  User: string;

  @IsNumber({}, { message: 'Amount must be a number' })
  Amount: number;

  @IsOptional()
  @IsDateString()
  Date?: string;

  @IsString()
  description: string;
}
