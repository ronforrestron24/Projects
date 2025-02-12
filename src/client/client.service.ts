import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client, ClientInput } from '../modules/clients/client.model';
import { SapService } from '../sap/sap.service';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<Client>,
    private readonly sapService: SapService,
  ) {}

  async syncClientData(clientId: string) {
    const sapData = await this.sapService.getClientFinancialData(clientId);
    return this.clientModel.findOneAndUpdate(
      { clientId },
      { name: sapData.name, balance: sapData.balance },
      { new: true, upsert: true },
    );
  }

  async getClients() {
    return this.clientModel.find().exec();
  }

  async createClient(client: ClientInput) {
    return this.clientModel.create(client);
  }

  async updateClient(client: Client) {
    return this.clientModel.findByIdAndUpdate(client._id, client, {
      new: true,
    });
  }

  async deleteClient(clientId: string) {
    return this.clientModel.findByIdAndDelete(clientId);
  }

  async getClientById(clientId: string) {
    return this.clientModel.findById(clientId);
  }

  async getClientByClientId(clientId: string) {
    return this.clientModel.findOne({ clientId });
  }
}
