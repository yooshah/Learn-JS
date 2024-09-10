// // Function accepting callback

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(" ");

//   return [first.toUpperCase(), ...other].join(" ");
// };

// // note - this function is higher order function->its one argument is a callback function

// const transformer = function (str, fn) {
//   console.log(`orginal string: ${str}`);
//   console.log(` transformed string: ${fn(str)}`);
//   console.log(` transformed by: ${fn.name}`); // note ->name property in function
// };
// // note ->here we do abstraction ,transfomer function does not need to know how the call back function is working

// transformer("yooshah! you are learning JavaScript", upperFirstWord);
// transformer("yooshah! you are learning JavaScript", oneWord);

// function returning a function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("hey");

// // note here greeterHey is the return function ->this is because of closure
// greeterHey("yooshah");

const kalpaka = {
  movie: "premalu",
  ticketCode: "E6",
  booking: [],

  curentShow(personName) {
    console.log(
      `Hey ${personName} movie running ${this.movie} ,bookNow with 20%off with code ${this.ticketCode}`
    );
    this.booking.push({ movie: `${this.movie}`, personName });
  },
};

// kalpaka.curentShow("yooshah");
const kairali = {
  movie: "Leo",
  ticketCode: "EPEs6",
  booking: [],
};

// to avoid keep adding same methodd to each object

const bookIt = kalpaka.curentShow; // note here bookIt is like a regular function not a method from (kalpaka),so this keyword is undefined  (strict mode)

// bookIt("yooshah"); // eroorr
//--------Call mathod
bookIt.call(kairali, "yooshah"); // here this method is set kairali
// to tell js explicitly how this keyword should there are 3 function methods 1-call 2-apply -bind

bookIt.call(kalpaka, "ashik");
console.log(kairali);
console.log(kalpaka);

// kairali.seat = 300;
let bookin = bookIt.bind(kalpaka);

bookin("yoosshhaaaa");
