import { create, Input, BASIC_SALES_TAX } from '../../../src/service/item/create';
import { Types } from '../../../src/service/item/types';


describe('Test create item', () => {
    describe('Creation behaviour', () => {
      it('Should create item, When input is passed correctly', () => {
        const input: Input = {
          name: 'name',
          type: Types.OTHER,
          netSalePrice: 1
        };

        return create(input)
          .then((item)=> {
            expect(item).toBeDefined();
          });
      });

      it('Should create item with netSalePrice, When input is passed correctly', () => {
        const input: Input = {
          name: 'name',
          type: Types.OTHER,
          netSalePrice: 1
        };

        return create(input)
          .then((item)=> {
            expect(item).toBeDefined();
            expect(item.salePrice).toBeDefined();
          });
      });

      it('Should create item with quantity, When input.quantity is undefined', () => {
        const input: Input = {
          name: 'name',
          type: Types.OTHER,
          netSalePrice: 1
        };

        return create(input)
          .then((item)=> {
            expect(item).toBeDefined();
            expect(item.quantity).toBeDefined();
            expect(item.quantity).toEqual(1);
          });
      });

      it('Should thow, when null', async () => {
        await expect(create(null)).rejects.toThrow();
      });

      it('Should thow, when undefined', async () => {
        await expect(create(null)).rejects.toThrow();
      });

    });

    describe('Calculate behaviour behaviour', () => {
      it('Should apply TAX, When not in SPECIAL_TYPE', () => {
        const input: Input = {
          name: 'name',
          type: Types.OTHER,
          netSalePrice: 1
        };

        return create(input)
          .then((item)=> {
            expect(item).toBeDefined();
            expect(item.salePrice).toEqual(input.netSalePrice * BASIC_SALES_TAX);
          });
      });

      it('Should apply TAX, When is BOOK', () => {
        const input: Input = {
          name: 'name',
          type: Types.BOOK,
          netSalePrice: 1
        };

        return create(input)
          .then((item)=> {
            expect(item).toBeDefined();
            expect(item.salePrice).toEqual(input.netSalePrice);
          });
      });
      it('Should apply TAX, When is FOOD', () => {
        const input: Input = {
          name: 'name',
          type: Types.FOOD,
          netSalePrice: 1
        };

        return create(input)
          .then((item)=> {
            expect(item).toBeDefined();
            expect(item.salePrice).toEqual(input.netSalePrice);
          });
      });
      it('Should apply TAX, When is MEDICAL', () => {
        const input: Input = {
          name: 'name',
          type: Types.MEDICAL,
          netSalePrice: 1
        };

        return create(input)
          .then((item)=> {
            expect(item).toBeDefined();
            expect(item.salePrice).toEqual(input.netSalePrice);
          });
      });
    });
});
