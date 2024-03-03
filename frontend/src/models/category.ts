import { ProductDTO } from './product';

export type CategoryDTO = {
  id: number;
  name: string;
  products : ProductDTO[];
}