import { Controller, Post, Body } from '@nestjs/common';
import { CustomersService } from './users.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(@Body() customerDto) {
    return this.customersService.createCustomer(customerDto);
  }
}
