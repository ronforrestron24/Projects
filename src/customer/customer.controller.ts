import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/customer.dto';
import { Customer } from './schema/customer.schema';
import { CustomersService } from './customer.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  /**
   * Create a new customer
   * @param createCustomerDto - Data Transfer Object for creating a customer
   * @returns The created customer
   */
  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    try {
      return await this.customerService.createCustomer(createCustomerDto);
    } catch (error) {
      throw new HttpException(
        'Error creating customer',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
