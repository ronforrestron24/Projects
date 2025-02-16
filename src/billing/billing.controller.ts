import { Controller, Post, Body } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillableMetricDto } from './dto/create-billable-metric.dto';

@Controller('invoices')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  async generateInvoice(
    @Body() createBillableMetricDto: CreateBillableMetricDto,
  ) {
    return this.billingService.createBillableMetric(createBillableMetricDto);
  }
}
