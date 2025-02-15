import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  log(@Body() transactionDto) {
    return this.transactionsService.logTransaction(transactionDto);
  }

  @Get()
  async getTotalSales(@Query('customer_id') customerId: string) {
    return this.transactionsService.getCustomerTotalSales(customerId);
  }
}
