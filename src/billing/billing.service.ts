import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBillableMetricDto } from './dto/create-billable-metric.dto';
import { BillableMetric } from './schema/billing.schema';

@Injectable()
export class BillingService {
  constructor(
    @InjectModel(BillableMetric.name)
    private billableMetricModel: Model<BillableMetric>,
  ) {}

  async createBillableMetric(
    createBillableMetricDto: CreateBillableMetricDto,
  ): Promise<BillableMetric> {
    const createdMetric = new this.billableMetricModel(createBillableMetricDto);
    return createdMetric.save();
  }
}
