import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Transaction,
  TransactionDocument,
} from '../modules/transaction/transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async createTransaction(transaction: Transaction): Promise<Transaction> {
    const newTransaction = new this.transactionModel(transaction);
    return newTransaction.save();
  }

  async getTransactions(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }

  async getTransactionById(id: string): Promise<Transaction> {
    return this.transactionModel.findById(id).exec();
  }
}
