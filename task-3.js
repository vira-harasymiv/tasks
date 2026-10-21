/*
Build a chain of three objects: vehicle → car → myTesla.

vehicle has a method move() that returns "Moving...".
car has a method honk() that returns "Beep!".
myTesla has a property brand: "Tesla".
Link them with setPrototypeOf() so myTesla can call both honk() and move().
Use hasOwnProperty() to show which properties belong to myTesla itself and which are inherited.
Bonus: use a for...in loop over myTesla and print each key, marking whether it is own or inherited.
*/

const vehicle = {
  move() {
    console.log("Moving...");
  },
};

const car = {
  honk() {
    console.log("Beep!");
  },
};

const myTesla = {
  brand: "Tesla",
};

Object.setPrototypeOf(car, vehicle);
Object.setPrototypeOf(myTesla, car);

function findOwnProperties(myObject) {
  for (const key in myObject) {
    if (myObject.hasOwnProperty(key)) {
      console.log(key);
    }
  }
}

findOwnProperties(myTesla);
