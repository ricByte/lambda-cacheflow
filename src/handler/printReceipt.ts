import receipt from '../service/print/receipt';
import { Input } from '../service/item/create';
import * as input from '../data/input.json'


export const printReceipt = async (input: Input[]): Promise<void> => {
  try {
    await receipt(input);
  } catch (e) {
    throw Error(e);
  }
};

export default printReceipt(input);
