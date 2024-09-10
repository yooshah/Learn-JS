// implemntation of class and object using constructor function

// const car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed}`);
// };
// car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new car("BMW", 110);
// const mercedes = new car("Mercedes", 95);

// bmw.accelerate();
// mercedes.accelerate();
// bmw.brake();

// understand prototypes

// console.log(Object.prototype);
// console.log(Array.prototype);

// console.log(Number.prototype);
// console.log(String.prototype);

// nums = [1, 2, 3];

// console.log(nums.__proto__); // here linked to array prototype
// console.log(nums.__proto__.__proto__); //  object prototype
// console.log(nums.__proto__.__proto__.__proto__); // null -- this is end of prototype
