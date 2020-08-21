import { Item } from '../../beans/Item';
import { Cart } from '../../beans/cart';
import { round2 } from '../../common/round';

type Totals = {
  salesTaxes: number,
  total: number
}

const calculateTotal = (items: Item[]): Totals => {
  const defaultTotals: Totals = {total: 0, salesTaxes: 0};
  const total = items && items.length && items.reduce((acc: Totals, item: Item) => {
    acc.total += item.salePrice;
    acc.salesTaxes += (item.salePrice - item.netSalePrice);
    return acc
  }, defaultTotals);
  return total || defaultTotals;
};

export const checkout = (items?: Item[]): Cart => {
  const {total, salesTaxes} = calculateTotal(items);
  return {
    items: items || null,
    total: round2(total),
    salesTaxes: round2(salesTaxes)
  };
};
