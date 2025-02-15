import { Controller, Post, Body } from '@nestjs/common';
import { BillableMetricService } from './billing.service';

@Controller('invoices')
export class BillingController {
  constructor(private readonly billableMetricService: BillableMetricService) {}

  @Post()
  async generateInvoice(@Body('customer_id') customerId: string) {
    return this.billableMetricService.createBillableMetric();
  }
}
