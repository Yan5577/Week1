let person = {
  name: 'yan',
  age: 21,
}
person.songs = ['song1', 'song2'];
console.log(person.songs);

/////////////////////
let offer = "none";
let time = 1200;
const cafe = {
  name: "amy",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks:["latte","water","tea"],
  breakfastOffer: "Free drink with surprising priced sandwich",
  noOffer: "sorry no offer",
  openCafe() {
    if(this.hasSpecialOffers) {
      return "Time for a special offer!";
    }
  },
    closeCafe(){
    return "we are closed!";
  }
};
console.log(cafe.openCafe());

/*this means this current object*/

// Activity1 
const person = {
  name: "amy",
  sayHi: () => {
    return `Hello my name is ${person.name}`;
    /*in ES6 we can do as below.
      sayHi(){
        return "Hello my name is ${this.name}";
    }*/
  },
};
console.log(person.sayHi());


// Activity2
const pet = {
   name: "woody",
   typeOfPet: "labrador",
   age: 5,
   colour: "yellow",
   eat() {
    return `${pet.name} is eating.`;
   },
   drink() {
    return `${pet.name} is drinking.`;
   }
};

console.log(pet.eat());

// Activity3
const coffeeShop = {
  branch:"oxford",
  drinks: ["latte = $3","water = $2","tea = $1"],
  food:["noodle = $5", "soup = $6"],
  drinksOrdered() {
    return `Your order is ${coffeeShop.drinks}`;
  },
  foodOrdered() {
    return `Your order is ${coffeeShop.food}`;
  }
};

console.log(coffeeShop.foodOrdered());





