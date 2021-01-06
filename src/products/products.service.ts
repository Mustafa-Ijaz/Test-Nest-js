import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductInterface } from "./product.interface";
import {Product , ProductDocument} from './product.schema';
import { Productlist } from  './product.model'

@Injectable()
export class ProductsService{
    items : Productlist[] =[];
    constructor(@InjectModel('Product') private readonly item : Model<ProductDocument> ) {}

    async insertTitle(title : string , price : number ){
        const  productObject = new this.item({
            title,
            price
        })
        const result = await productObject.save();
        return result;
    }

} 