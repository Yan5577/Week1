 let drinks = [
   "juice",
    "beer",
    "soda",
    "water"
 ];
 for(let i = 0; i < drinks.length; i++ ) {
  console.log(drinks[i]);
 }

// level up:
let multiplesTwo = [];
for(let i = 0; i < 20; i++) {
  if(i%2 == 0) {
    multiplesTwo.push(i);
  }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// Activity 3(from 9 - 0)

 for(let i = 10; i > 0; i--){
  console.log(i);
}

// Activity 2(random number)

let randomNums = [];

for (i = 0 ; i < 6 ; i++ ) {
    randomNums.push(Math.floor(Math.random() * 50 ))
}
console.log(randomNums);


