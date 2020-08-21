import { Expose, Transform } from 'class-transformer';
import { IsString, IsNumber, IsBoolean } from 'class-validator';
import { SPECIAL_TYPES_LIST } from '../service/item/types';
import { round2 } from '../common/round';

export const BASIC_SALES_TAX_PERC = 0.10;
export const SALES_TAXES_PERC = 0.05;
const isSpecialType = (item: Item): boolean => SPECIAL_TYPES_LIST.includes(item.type);

const calculateSalePrice = (item: Item): number => {
  let salePrice: number = item.netSalePrice;
  let deltaTax = 1;
  if (!isSpecialType(item)) {
    deltaTax += BASIC_SALES_TAX_PERC;
  }

  if(item.imported) {
    deltaTax += SALES_TAXES_PERC;
  }

  if (deltaTax > 1) {
    salePrice = round2(salePrice * deltaTax);
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
  @IsBoolean()
  @Transform(value => (!!value||false))
  imported: boolean;

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
