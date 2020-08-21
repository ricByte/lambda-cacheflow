import { Item } from './Item';

export interface Cart {
  items: Item[];
  total: number;
  salesTaxes: number;
}
