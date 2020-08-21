import {
  IsNumber,
  IsString
} from 'class-validator';
import {
  Expose, Transform,
} from 'class-transformer';
import {
  transformAndValidate,
  TransformValidationOptions,
} from 'class-transformer-validator';

import { SPECIAL_TYPES_LIST } from './types';

export const BASIC_SALES_TAX = 1.10;
const TRANSFORMER_OPTIONS: TransformValidationOptions = {
  transformer:{
    excludeExtraneousValues: true
  },
  validator:{}
};

export interface Input {
  quantity?: number,
  name: string,
  type: string,
  netSalePrice: number
}

class Item {

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

const isSpecialType = (item: Item): boolean => SPECIAL_TYPES_LIST.includes(item.type);

const calculateSalePrice = (item: Item): number => {
  let salePrice: number = item.netSalePrice;
  if (!isSpecialType(item)) {
    salePrice = salePrice * BASIC_SALES_TAX
  }

  return salePrice;
};

export const create = async (input: Input): Promise<Item> => {
  return await transformAndValidate(Item, input, TRANSFORMER_OPTIONS);
};
