import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from '../modules/transaction/transaction.schema';
import { Types } from 'mongoose';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    try {
      const transaction = {
        ...createTransactionDto,
        User: new Types.ObjectId(createTransactionDto.User),
        Date: createTransactionDto.Date
          ? new Date(createTransactionDto.Date)
          : new Date(),
      };
      return await this.transactionsService.createTransaction(transaction);
    } catch (error) {
      throw new HttpException(
        'Failed to create transaction',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async getAllTransactions(): Promise<Transaction[]> {
    try {
      return await this.transactionsService.getTransactions();
    } catch (error) {
      throw new HttpException(
        'Failed to fetch transactions',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async getTransaction(@Param('id') id: string): Promise<Transaction> {
    try {
      const transaction = await this.transactionsService.getTransactionById(id);
      if (!transaction) {
        throw new HttpException('Transaction not found', HttpStatus.NOT_FOUND);
      }
      return transaction;
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw error;
      }
      throw new HttpException(
        'Failed to fetch transaction',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
