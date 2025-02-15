import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from './schema/customer.schema';
import { CreateCustomerDto } from './dto/customer.dto';
import { Client } from 'lago-javascript-client';
import { ConfigService } from '@nestjs/config';
import { Country, Currency } from 'lago-javascript-client';

@Injectable()
export class CustomersService {
  private lagoClient = Client(process.env.LAGO_API_KEY);

  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
    private configService: ConfigService,
  ) {
    const lagoApiKey = this.configService.get<string>('LAGO_API_KEY');
    if (!lagoApiKey) {
      throw new Error('LAGO_API_KEY is not defined in environment variables');
    }
    this.lagoClient = Client(lagoApiKey);
  }

  /**
   * Creates a new customer in the database and via the Lago API.
   * @param createCustomerDto - Data Transfer Object for creating a customer
   * @returns The created customer
   */
  async createCustomer(
    createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    try {
      // Create customer in the local database
      const createdCustomer = new this.customerModel(createCustomerDto);
      const savedCustomer = await createdCustomer.save();

      // Create customer via Lago API
      const lagoResponse = await this.lagoClient.customers.createCustomer({
        customer: {
          external_id: createCustomerDto.external_id,
          address_line1: createCustomerDto.address_line1,
          address_line2: createCustomerDto.address_line2,
          city: createCustomerDto.city,
          country: createCustomerDto.country as Country,
          currency: createCustomerDto.currency as Currency,
          email: createCustomerDto.email,
          legal_name: createCustomerDto.legal_name,
          legal_number: createCustomerDto.legal_number,
          name: createCustomerDto.name,
          phone: createCustomerDto.phone,
          state: createCustomerDto.state,
          tax_identification_number:
            createCustomerDto.tax_identification_number,
          url: createCustomerDto.url,
          zipcode: createCustomerDto.zipcode,
        },
      });

      // Optionally, store Lago customer ID
      // savedCustomer.lago_id = lagoResponse.id;
      // await savedCustomer.save();

      return savedCustomer;
    } catch (error) {
      throw new HttpException(
        `Error creating customer: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
