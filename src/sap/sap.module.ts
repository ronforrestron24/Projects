import { Module } from '@nestjs/common';
import { SapService } from './sap.service';
import { SapResolver } from './sap.resolver';

@Module({
  providers: [SapService, SapResolver],
  exports: [SapService, SapResolver],
})
export class SapModule {}
