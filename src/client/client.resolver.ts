import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ClientService } from './client.service';
import { Client, ClientInput } from '../modules/clients/client.model';

@Resolver(() => Client)
export class ClientResolver {
  constructor(private readonly clientService: ClientService) {}

  @Query(() => Client)
  async syncClient(@Args('clientId', { type: () => String }) clientId: string) {
    return this.clientService.syncClientData(clientId);
  }

  @Query(() => [Client])
  async getClients() {
    return this.clientService.getClients();
  }

  @Query(() => Client, { nullable: true }) // ✅ Fix: Change getClientById to a query
  async getClientById(
    @Args('clientId', { type: () => String }) clientId: string,
  ) {
    return this.clientService.getClientById(clientId);
  }

  @Mutation(() => Client)
  async createClient(@Args('input') input: ClientInput) {
    return this.clientService.createClient(input as Client); // TypeScript will not complain
  }

  @Mutation(() => Client)
  async updateClient(@Args('input') input: ClientInput) {
    return this.clientService.updateClient(input);
  }

  @Mutation(() => Boolean) // ✅ Fix: Use Boolean return type for delete mutation
  async deleteClient(
    @Args('clientId', { type: () => String }) clientId: string,
  ) {
    return this.clientService.deleteClient(clientId);
  }
}
