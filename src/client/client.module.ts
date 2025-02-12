import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientService } from './client.service';
import { ClientResolver } from './client.resolver';
import { Client, ClientSchema } from '../modules/clients/client.model';
import { SapModule } from '../sap/sap.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    SapModule,
  ],
  providers: [ClientService, ClientResolver],
  exports: [ClientService],
})
export class ClientModule {}
