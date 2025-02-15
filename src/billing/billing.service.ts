import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BillableMetric } from './schema/billing.schema';

@Injectable()
export class BillableMetricService {
  constructor(
    @InjectModel(BillableMetric.name)
    private billableMetricModel: Model<BillableMetric>,
  ) {}

  async createBillableMetric(): Promise<BillableMetric> {
    const newMetric = new this.billableMetricModel({
      name: 'Storage',
      code: 'storage',
      aggregation_type: 'sum_agg',
      recurring: false,
      field_name: 'gb',
      weighted_interval: 'seconds',
      filters: [
        {
          key: 'region',
          values: ['us-east-1', 'us-east-2', 'eu-west-1'],
        },
      ],
    });
    return newMetric.save();
  }
}
