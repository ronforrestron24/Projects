import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { SapModule } from './sap/sap.module';
import { PosService } from './pos/pos.service';
import { PosModule } from './pos/pos.module';
import { ClientModule } from './client/client.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DatabaseModule } from './database/database.module';
import { CostCenterService } from './cost-center/cost-center.service';
import { CostCenterController } from './cost-center/cost-center.controller';
import { CostCenterModule } from './cost-center/cost-center.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
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
    DatabaseModule,
    CostCenterModule,
  ],
  controllers: [AppController, CostCenterController],
  providers: [AppService, PosService, CostCenterService],
})
export class AppModule {}
