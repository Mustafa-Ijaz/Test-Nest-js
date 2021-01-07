import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ProductSchema } from './product.schema'

@Module({
    imports : [
        MongooseModule.forFeature([{name : 'Product' , schema : ProductSchema}]),
    ],
    controllers : [ProductsController],
    providers : [ProductsService]
})
export class ProductsModule{}