'use strict';
// fill in the blanks

console.log('--- loading: list all numbers');

function listAllNumbersHandler() {
  debugger;
  console.log('\n--- action: list all numbers ---');
  console.log('range:', typeof range, '\n', range);

  // perform core logic
  /* create a string listing all the numbers in the range
    ex: "1, 2, 3, 4, "
    ex: "1, 2, 3, 4, 5, 6, "
  */
  let numbersList = '';
  for (let i = 1; i <= range; i++) {
    numbersList+=i+'';
  }
  console.log('numbersList:', typeof numbersList, '\n', numbersList);

  // alert result for the user
  alert(numbersList);
}
