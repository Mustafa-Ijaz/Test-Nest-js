import { Document } from 'mongoose';

export class ProductInterface extends Document {
  readonly title: string;
  readonly price: number;
}