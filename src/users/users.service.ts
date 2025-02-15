import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './schema/user.schema';
import { Client } from 'lago-javascript-client';

@Injectable()
export class CustomersService {
  private lagoClient = new Client(process.env.LAGO_API_KEY);

  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async createCustomer(customerDto: any) {
    const newCustomer = new this.customerModel(customerDto);
    await newCustomer.save();

    return this.lagoClient.customers.createCustomer({ customer: customerDto });
  }
}
