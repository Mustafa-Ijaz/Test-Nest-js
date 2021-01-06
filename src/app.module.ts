import { Module } from '@nestjs/common';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { ConfigModule,ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config:ConfigService) => config.get('mongodb',{
        connectionName: 'products',
      }),
      inject: [ConfigService],
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
