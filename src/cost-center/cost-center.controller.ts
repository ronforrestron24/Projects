import { Controller, Get } from '@nestjs/common';
import { CostCenterService } from './cost-center.service';
import { CostCenter } from '../generated/API_JOURNALENTRYITEMBASIC_SRV/CostCenter';

@Controller('cost-centers')
export class CostCenterController {
  constructor(private readonly costCenterService: CostCenterService) {}

  @Get()
  async getCostCenters() {
    return this.costCenterService.fetchCostCenters(); // Call the service method
  }
}
