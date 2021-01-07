import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {Product , ProductDocument} from './product.schema';


@Injectable()
export class ProductsService{

    constructor(@InjectModel('Product') private readonly item : Model<ProductDocument> ) {}

    async insertTitle(title : string , price : number ){

        const newProduct = new this.item({title, price});
        return newProduct.save();
        // console.log(title, price)

        // const h = this.item.create({title, price})

        // const  productObject = new this.item({
        //     title,
        //     price
        // })
        // const result = await productObject.save();
        //return h;
    }

} 