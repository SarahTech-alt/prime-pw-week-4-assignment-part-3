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
  console.log(`The item ${item} was added to the basket.`);
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
  console.log(`Basket has ${array}.`);
  array.length = 0; {
  console.log(`Basket now has ${array}.`);
  }
}

empty(basket);

console.log(basket);

//console.log(`Basket is ${basket}`);
//console.log('Adding apples (expect true)', addItem('apples'));
//console.log(`Basket is now ${basket}`);
//```



//Alternate solution, why doesn't it keep array empty??

addItem('bananas');

/*
function empty2( array ){
  console.log(`Basket is now ${array}`);
  array = []; {
  console.log(`Basket is now ${array}`);
  return array;
}
}

empty2(basket);
console.log(basket);

*/


//Stretch Goals
//2. Create a function called isFull(). It should:r
  //- return `false` if the basket contains *less* than max number of items
  //- return `true` otherwise (equal or more than maxItems)

  function isFull( array ){
    if (array.length >= 5){
      return true;
    }
    return false;
  }

///3. Update the required `addItem` function to:
  //- Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
  //- If an item was added to the array, return `true`
  //- If there was no room and the item could not be added return `false`

function addItem2( array, item ){
  if (isFull(array) === false){
    console.log(`The array before trying to add item called ${item} contained ${array}.`);
    array.push(item);
    return true;
  }
  console.log(`The basket was full so could not add ${item}.`);
  return false;
}

let secondBasket = ['grapes', 'mangos', 'plums', 'water', 'carrot'];
console.log(isFull(secondBasket));

addItem2(basket, 'cheese');
addItem2(basket, 'crackers');
addItem2(basket, "figs");
addItem2(basket, "bread");
addItem2(basket, "apricots");
addItem2(secondBasket, "jam");
//addItem2("oranges");
console.log(basket);
console.log(secondBasket);

//4. Create a function called `removeItem`. It should:
  //- Take an input parameter for a string `item`
  //- Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  //- Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  //- Return the item removed or `null` if the item was not found

function removeItem( array, checkItem ){
  let position = array.indexOf(checkItem);
  console.log(`Checking ${array} for presence of ${checkItem}.`);
  if (position >= 0){
    array.splice(position,1);
    console.log(`Found ${checkItem} and removed it. The basket now contains ${array}.`);
    return;
  }
  console.log(`Did not find the item ${checkItem} in the basket. It still contains ${array}.`);
  return;
}

removeItem(basket, 'cheese');
removeItem(basket, 'figs');
removeItem(basket, 'puppies');
