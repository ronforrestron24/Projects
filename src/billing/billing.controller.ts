import { Controller, Post, Body } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('invoices')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  async generateInvoice(@Body('customer_id') customerId: string) {
    return this.billingService.checkAndInvoice(customerId);
  }
}
