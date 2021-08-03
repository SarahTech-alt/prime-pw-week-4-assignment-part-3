console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

/* - Create a function called `addItem`. It should:
  - take an input parameter for a string `item`
  - add the new item to the global array `basket`.
  - return `true` indicating the item was added
  */

function addItem( item ){
  basket.push(item);
  return true;
}

addItem('apple');
addItem('pumpkin');
addItem('peach');
console.log(basket);

/* - Create a function called `listItems`. It should:
  - loop over the items in the `basket` array
  - console.log each individual item on a new line
*/

function listItems ( array ){
  for (let items of array){
    console.log(items);
  }
}

listItems(basket);

//- Create a function called `empty`. It should:
//  - reset the `basket` to an empty array

function empty( array ){
  array.length = 0;
}

empty(basket);

console.log(basket);

/*

Why doesn't this method work?

addItem('banana');

function empty2( array ){
  array = [];
}

empty2(basket);
console.log(basket);

*/
