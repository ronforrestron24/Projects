import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersService } from './customers/customers.service';
import { CustomersController } from './customers/customers.controller';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [AppController, CustomersController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
