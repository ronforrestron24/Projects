import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { SapModule } from './sap/sap.module';
import { PosService } from './pos/pos.service';
import { PosModule } from './pos/pos.module';
import { ClientResolver } from './client/client.resolver';
import { ClientModule } from './client/client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    SapModule,
    PosModule,
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService, PosService, ClientResolver],
})
export class AppModule {}
