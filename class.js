class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(` ${this.fullName} ,your age is ${2024 - this.birthYear}`);
  }
}

const yooshah = new Person("yooshah", 2000);

console.log(yooshah);

yooshah.calcAge();
