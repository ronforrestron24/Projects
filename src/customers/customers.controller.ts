import { Controller, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  async createCustomer(@Body() customerData: any) {
    return this.customersService.createCustomer(customerData);
  }
}
