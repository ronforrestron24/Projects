import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PosService } from './pos.service';
import { PosResolver } from './pos.resolver';
import { SapService } from '../sap/sap.service';
import { Client, ClientSchema } from '../modules/clients/client.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  providers: [PosService, PosResolver, SapService],
})
export class PosModule {}
