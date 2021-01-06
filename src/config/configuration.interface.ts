import { MongooseModuleOptions } from '@nestjs/mongoose';

export interface ConfigurationInterface {
  mongodb: MongooseModuleOptions;
}