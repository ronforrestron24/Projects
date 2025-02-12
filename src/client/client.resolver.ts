import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
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

  @Mutation(() => Client)
  async createClient(@Args('client') client: Client) {
    return this.clientService.createClient(client);
  }

  @Mutation(() => Client)
  async updateClient(@Args('client') client: Client) {
    return this.clientService.updateClient(client);
  }

  @Mutation(() => Client)
  async deleteClient(@Args('clientId') clientId: string) {
    return this.clientService.deleteClient(clientId);
  }

  @Mutation(() => Client)
  async getClientById(@Args('clientId') clientId: string) {
    return this.clientService.getClientById(clientId);
  }
}
