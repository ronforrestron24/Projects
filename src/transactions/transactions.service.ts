import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './schema/transaction.schema';
import { Client } from 'lago-javascript-client';

@Injectable()
export class TransactionsService {
  private lagoClient = new Lago({ apiKey: process.env.LAGO_API_KEY });

  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

  async logTransaction(transactionDto: any) {
    const newTransaction = new this.transactionModel(transactionDto);
    await newTransaction.save();

    return this.lagoClient.transactions.createTransaction({
      transaction: transactionDto,
    });
  }

  async getCustomerTotalSales(customerId: string) {
    const transactions = await this.transactionModel.find({
      external_customer_id: customerId,
    });
    return transactions.reduce((sum, tx) => sum + tx.amount_cents, 0) / 100;
  }
}
