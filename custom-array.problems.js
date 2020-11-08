const { Array } = require('./array')
function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);
}

main()
// Capacity: 8, length: 1, memory addy: 0
// Capacity: 8, length: 6, memory addy: 0
