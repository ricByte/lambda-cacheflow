import {
  transformAndValidate,
  TransformValidationOptions,
} from 'class-transformer-validator';
import { Item } from '../../beans/Item';

const TRANSFORMER_OPTIONS: TransformValidationOptions = {
  transformer:{
    excludeExtraneousValues: true
  },
  validator:{}
};

export interface Input {
  quantity?: number,
  imported?: boolean,
  name: string,
  type: string,
  netSalePrice: number
}

export const create = async (input: Input): Promise<Item> => {
  return await transformAndValidate(Item, input, TRANSFORMER_OPTIONS);
};
