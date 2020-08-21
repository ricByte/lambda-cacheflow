import { Expose, Transform } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';
import { SPECIAL_TYPES_LIST } from '../service/item/types';

export const BASIC_SALES_TAX = 1.10;
const isSpecialType = (item: Item): boolean => SPECIAL_TYPES_LIST.includes(item.type);

const calculateSalePrice = (item: Item): number => {
  let salePrice: number = item.netSalePrice;
  if (!isSpecialType(item)) {
    salePrice = salePrice * BASIC_SALES_TAX
  }

  return salePrice;
};

export class Item {

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  type: string;

  @Expose()
  @IsNumber()
  netSalePrice: number;


  @Expose()
  @IsNumber()
  @Transform((
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    value, obj) => calculateSalePrice(obj))
  salePrice:number;

  @Expose()
  @IsNumber()
  @Transform(value => (value||1))
  quantity:number;
}
