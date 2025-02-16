import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from 'lago-javascript-client';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomersService {
  private client: any;
  private readonly logger = new Logger(CustomersService.name);

  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {
    this.client = Client('0996e856-1eda-4a75-94b0-ba6926002545', {
      baseUrl: 'http://localhost:3000/api/v1/',
    });
  }

  async createCustomer(customerData: any): Promise<Customer> {
    try {
      const customer = new this.customerModel(customerData);
      await customer.save();

      // Send data to Lago API
      await this.client.customers.createCustomer({ customer: customerData });

      return customer;
    } catch (error) {
      this.logger.error('Error creating customer', error);
      throw error;
    }
  }
}
