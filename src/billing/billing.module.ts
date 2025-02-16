import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';
import { BillableMetric, BillableMetricSchema } from './schema/billing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BillableMetric.name, schema: BillableMetricSchema },
    ]),
  ],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
