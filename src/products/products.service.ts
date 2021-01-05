import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService{
    private title : string ;

    insertTitle(title : string ){
        this.title = title;

        return {name : this.title, value : 'mustafa'}

    }

}