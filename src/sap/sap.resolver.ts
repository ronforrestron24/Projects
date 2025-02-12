import { Resolver, Query, Args } from '@nestjs/graphql';
import { SapService } from './sap.service';

@Resolver()
export class SapResolver {
  constructor(private readonly sapService: SapService) {}

  @Query(() => String)
  async getClientSAPData(@Args('clientId') clientId: string) {
    return this.sapService.getClientFinancialData(clientId);
  }
}
