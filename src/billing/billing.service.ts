import { Injectable } from '@nestjs/common';
import { TransactionsService } from '../transactions/transactions.service';
import { Client } from 'lago-javascript-client';

@Injectable()
export class BillingService {
  private lagoClient = new Client(process.env.LAGO_API_KEY);

  constructor(private transactionsService: TransactionsService) {}

  async checkAndInvoice(customerId: string) {
    const totalSales =
      await this.transactionsService.getCustomerTotalSales(customerId);

    if (totalSales >= 500) {
      return this.lagoClient.invoices.createInvoice({
        invoice: { external_customer_id: customerId },
      });
    }
    return { message: 'No invoice needed yet' };
  }
}
