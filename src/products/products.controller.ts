import { Controller,Post,Body,Get,Request,Response } from "@nestjs/common";

import { ProductsService } from "./products.service";
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController{
    constructor (private readonly productsService: ProductsService){}

    @Post()
    @ApiCreatedResponse({
        status : 201,
        description : "Item Successfully Added to Database"
    })
    viewProducts(
        @Request() req,
        @Body('title') productTitle : string,
        @Body('price') productPrice : number
        ) {
            console.log("Request",req.body)
            console.log("productTitle",productTitle)
            console.log("productPrice",productPrice)
        return this.productsService.insertTitle(productTitle,productPrice);
    }
    @Get('test')
    @ApiCreatedResponse({
        status : 201,
        description : "Server is running successfully"
    })
    test() : string {
        return "Test Successfully completed"
    }

}

