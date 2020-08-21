import { Item } from '../../beans/Item';
import { Cart } from '../../beans/cart';

const SALES_TAXES_PERC = 0.05;

const calculateTotal = (items: Item[]) => {
  const total = items && items.length && items.reduce((acc: number, currentValue: Item)=> acc+currentValue.salePrice, 0);
  return total || 0;
};

export const checkout = (items?: Item[]): Cart => {
  const total: number = calculateTotal(items);
  return {
    items: items || null,
    total,
    salesTaxes: total * SALES_TAXES_PERC
  };
};
