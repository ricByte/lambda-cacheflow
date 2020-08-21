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

console.log(`----------------------------------------------`);
console.log('          HELLLOOOO FROM Riccardo             ');
console.log('                                              ');
console.log('          Here You can find the               ');
console.log('          receipt of our basket.              ');
console.log('          If you want to modify basket        ');
console.log('          please go under src/data/input.json ');
console.log('          and then modify that                ');
console.log('          !!!ENJOY!!!                         ');
console.log('                                              ');
printReceipt(input).then(() => {
console.log('Riccardo © All rights reserved :P');
console.log(`----------------------------------------------`);
});

