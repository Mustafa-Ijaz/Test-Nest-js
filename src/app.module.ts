import { Module } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule,ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

import configuration from './config/configuration';

@Module({
  imports: [
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (config:ConfigService) => config.get('mongodb',{
    //     connectionName: 'products',
    //   }),
    //   inject: [ConfigService],
    // }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('mongodb'),
      inject: [ConfigService],
    }),
    ProductsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
