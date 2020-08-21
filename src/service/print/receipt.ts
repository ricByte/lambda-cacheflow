import { Input, create } from '../item/create';
import { Item } from '../../beans/Item';
import { Cart } from '../../beans/cart';
import { checkout } from '../cart/checkout';


function writeItems(cart: Cart) {
  console.log(`---------------- RECEIPT -------------------`);
  if(cart.items) {
    cart.items.forEach((item: Item) => {
      console.log(`${ item.quantity } ${ item.name }: ${ item.salePrice }`);
    })
  } else {
    console.log(`No item`);
  }
}

function writeTotals(cart: Cart) {
  console.log(`--------------------------------------------`);
  console.log(`Sales Taxes: ${cart.salesTaxes}`);
  console.log(`Total${cart.total}`);
  console.log(`--------------- END RECEIPT ----------------`);
}

export default async (inputs: Input[]) => {
  try {
    const items: Item[] = await Promise.all(inputs.map((input) => create(input)));
    const cart: Cart = checkout(items);
    writeItems(cart);
    writeTotals(cart);
  } catch (e) {
    throw Error(`Impossible to print receipt: ${e}`)
  }

}
