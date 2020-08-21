import { create, Input } from '../../../src/service/item/create';
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

    describe('Calculate behaviour', () => {
      describe('not imported', () => {
        it('Should apply TAX, When not in SPECIAL_TYPE', () => {
          const input: Input = {
            name: 'Music CD',
            type: Types.OTHER,
            netSalePrice: 14.99
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(16.50);
              expect(item.salePrice).not.toEqual(16.49);
            });
        });

        it('Should not apply TAX, When is BOOK', () => {
          const input: Input = {
            name: 'Book',
            type: Types.BOOK,
            netSalePrice: 12.49
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(input.netSalePrice);
            });
        });
        it('Should not apply TAX, When is FOOD', () => {
          const input: Input = {
            name: 'Chocolate bar',
            type: Types.FOOD,
            netSalePrice: 0.85
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(input.netSalePrice);
            });
        });
        it('Should not apply TAX, When is MEDICAL', () => {
          const input: Input = {
            name: 'Headache pills',
            type: Types.MEDICAL,
            netSalePrice: 9.75
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(input.netSalePrice);
            });
        });
      });

      describe('imported', () => {
        it('Should apply TAX, When not in SPECIAL_TYPE', () => {
          const input: Input = {
            name: 'Imported bottle of parfume',
            type: Types.OTHER,
            netSalePrice: 27.99,
            imported: true
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(32.2);
              expect(item.salePrice).not.toEqual(32.19);
            });
        });

        it('Should apply TAX, When is BOOK', () => {
          const input: Input = {
            name: 'Imported book',
            type: Types.BOOK,
            netSalePrice: 10,
            imported: true
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(10.5);
            });
        });
        it('Should apply TAX, When is FOOD', () => {
          const input: Input = {
            name: 'Box of imported chocolates',
            type: Types.FOOD,
            netSalePrice: 11.25,
            imported: true
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(11.85);
            });
        });
        it('Should apply TAX, When is MEDICAL', () => {
          const input: Input = {
            name: 'Imported Tachipirina',
            type: Types.MEDICAL,
            netSalePrice: 1,
            imported: true
          };

          return create(input)
            .then((item)=> {
              expect(item).toBeDefined();
              expect(item.salePrice).toEqual(1.05);
            });
        });
      });
    });
});
