import { Controller,Post,Body,Get } from "@nestjs/common";

import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{
    constructor (private readonly productsService: ProductsService){}
    @Post()
    viewProducts(
        @Body('title') proTitle : string
        ): any {
        return this.productsService.insertTitle(proTitle);
    }
    @Get('test')
    test() {
        console.log("Hello")
        return "Test Successfully completed"
    }

}

