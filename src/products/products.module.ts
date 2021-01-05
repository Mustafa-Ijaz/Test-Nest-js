import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    controllers : [ProductsController],
    providers : [ProductsService]
})
export class ProductsModule{}