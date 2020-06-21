
'use strict';
// write the logic

console.log('--- loading: evens or odds');

function evensOrOddsHandler() {
  debugger;
  console.log('\n--- action: sum numbers in range ---');
  console.log('range:', typeof range, '\n', range);

  // read user input
  const displayEvens = confirm('would you like to see even numbers?');
  console.log('displayEvens:', typeof displayEvens, '\n', displayEvens);

  // perform core logic
  /* create a comma-separated list if all the evens or odds in the range
    if range is 5 and the user asks for evens:
      "2, 4, "
    if range is 5 and the user asks for odds:
      "1, 3, 5, "
    if range is 8 and the user asks for evens:
      "2, 4, 6, 8, "
    ...
  */
  let listedNumbers = '';
  let i=1;
  while ( 2*i<=range ||2*i+1<=range) {
    if(displayEvens){
      i=i*2;
      }
    else{
      if(i==1)
      listedNumbers+=i+','
      i=i*2+1
    }
    listedNumbers+=i+','
  }
  console.log('listedNumbers:', typeof listedNumbers, '\n', listedNumbers);

  // alert result for the user
  alert(listedNumbers);
}
