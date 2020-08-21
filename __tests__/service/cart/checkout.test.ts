import { checkout } from '../../../src/service/cart/checkout';
import { Cart } from '../../../src/beans/cart';
import { Item } from '../../../src/beans/Item';
import { Types } from '../../../src/service/item/types';


describe('Test checkout cart', () => {
  describe('checkout behaviour', () => {
    it('Should create cart with total = 0, When items is undefined', () => {
      const cart: Cart = checkout();

      expect(cart).toBeDefined();
      expect(cart.items).toBeNull();
      expect(cart.total).toBeDefined();
      expect(cart.total).toEqual(0);
      expect(cart.salesTaxes).toBeDefined();
      expect(cart.salesTaxes).toEqual(0);
    });

    it('Should create cart with total = 0, When items is null', () => {
      const cart: Cart = checkout(null);

      expect(cart).toBeDefined();
      expect(cart.items).toBeNull();
      expect(cart.total).toBeDefined();
      expect(cart.total).toEqual(0);
      expect(cart.salesTaxes).toBeDefined();
      expect(cart.salesTaxes).toEqual(0);
    });

    it('Should create cart with total != 0, When items', () => {
      const items: Item[] = [
          {
            name: 'name',
            type: Types.OTHER,
            netSalePrice: 1,
            quantity: 1,
            salePrice: 1.1
          }
        ],
        cart: Cart = checkout(items);

      expect(cart).toBeDefined();
      expect(cart.items).not.toBeNull();
      expect(cart.total).toBeDefined();
      expect(cart.total).not.toEqual(0);
      expect(cart.salesTaxes).toBeDefined();
      expect(cart.salesTaxes).not.toEqual(0);
      expect(cart.salesTaxes).not.toEqual(cart.total);
    });
  });

  describe('calculateTotal behaviour', () => {
    it('Should has salesTaxes like 0.05 of total, When items', () => {
      const items: Item[] = [
          {
            name: 'name',
            type: Types.OTHER,
            netSalePrice: 1,
            quantity: 1,
            salePrice: 1.1
          },
          {
            name: 'name',
            type: Types.OTHER,
            netSalePrice: 14.99,
            quantity: 1,
            salePrice: 16.49
          }
        ],
        cart: Cart = checkout(items);

        expect(cart.salesTaxes).toEqual(items.reduce((acc, items)=> acc + items.salePrice, 0) * 0.05)
    });
  });

});
