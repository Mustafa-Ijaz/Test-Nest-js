import { Document, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

export class Product {

  @Prop({ alias: 'title' })
  title: string;
  @Prop({ alias: 'price' })
  price: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);