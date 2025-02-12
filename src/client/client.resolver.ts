import { Resolver, Query, Args } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client } from '../modules/clients/client.model';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => Client)
  async syncClient(@Args('clientId') clientId: string) {
    return this.clientService.syncClientData(clientId);
  }

  @Query(() => [Client])
  async getClients() {
    return this.clientService.getClients();
  }
}
