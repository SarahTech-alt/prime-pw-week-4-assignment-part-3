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
  console.log(`Basket is ${array}`);
  array.length = 0; {
  console.log(`Basket is now ${array}`);
  }
}

empty(basket);

console.log(basket);

//console.log(`Basket is ${basket}`);
//console.log('Adding apples (expect true)', addItem('apples'));
//console.log(`Basket is now ${basket}`);
//```



//Alternate solution, why doesn't it keep array empty??

addItem('banana');

function empty2( array ){
  console.log(`Basket is now ${array}`);
  array = []; {
  console.log(`Basket is now ${array}`);
}
}

empty2(basket);
console.log(basket);



//Stretch Goals
//2. Create a function called isFull(). It should:r
  //- return `false` if the basket contains *less* than max number of items
  //- return `true` otherwise (equal or more than maxItems)

function isFull( items ){
  if (items.length >= 5){
    return true;
  }
  return false;
}

let secondBasket = ['grapes', 'mangos', 'plums', 'water', 'carrot'];

console.log(isFull(secondBasket));

///3. Update the required `addItem` function to:
  //- Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
  //- If an item was added to the array, return `true`
  //- If there was no room and the item could not be added return `false`

function addItem2( item ){
  if (isFull(basket) === false){
    return basket.push(item);
  }
  return false;
  }


addItem2('cheese');
addItem2('crackers');
addItem2("jam");
addItem2("figs");
addItem2("bread");
addItem2("oranges");
console.log(basket);
