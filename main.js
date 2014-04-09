//this is a comment//

/* this is a
multi line comment
*/

// var firstName = prompt("What is your name?");
// var lastName = prompt("What is your last name?");
// var fullName = firstName + " " + lastName;
//
// var age = prompt("what is your age?");
// age = parseInt(age);
//
// if (age > 20) {
//   console.log('you can drink alcohol...legally ;)');
// } else {
//   console.log('you are too young to drink');
// }
//
// if (age >= 0 && age < 6){ //between 0 and 5
//    console.log('Movie: G');
// } else if (age >=6 && age < 13) { //between 6 and 12
//   console.log('Movie: PG');
// } else if (age >=13 && age < 18) { //between 13 and 17
//   console.log('Movie: PG-13');
// } else { //18 and over
//   console.log("Movie: R");
// }

// var color = prompt('what is your favorite color?');
// color = color.toLowerCase();
//
// debugger;
// switch(color){
//   case 'blue':
//     console.log('blue is awesome');
//     break;
//   case 'red':
//     console.log('red is awesome');
//     break;
//   case 'green':
//     console.log('green is awesome');
//     break;
//   default:
//     console.log("I don\'t like that color'");
//
// }

// var number = prompt('Enter a number');
// number = number * 1;
// if(number > 0 && number < 10){ //number initially has to be between 0 and 10
//   while(number < 50) {  //here in the loop we are going to increment the number
//     console.log('Number : ' + number);
//     number += 2; //add 1 to number - you can also do number++
//   }
// }

// for(var i = number; i < 50; i++){
//   console.log('i: ' + i);
// }









//loop from 0 to 100, put all the even numbers into an array called 'evens' squared and all the 'odds' cubed

// var evens = [],
//     odds = [];
//
// for (var i = 0; i < 100; i++) {
//   var remainder = i % 2;
//   if (remainder === 0) {  //this is even
//     var square = i * i;
//     evens.push(square);  //push square into the evens array
//   } else{  //this is odd
//     var cube = Math.pow(i, 3);  //i to the 3rd power
//     odds.push(cube);
//   }
// }
//
// console.log(evens);
// console.log(odds);

function square(x) {   //x is a 'parameter', or the input to the function
  return x * x;
}

function cube(x) {
  return Math.pow(x, 3);
}

function is_odd(x) {    //tells if a number is true or false
  if (x % 2 === 1) {
    return true;
  }
    return false;

}

function isOdd(x) {    //tells if a number is true or false
  return x % 2;
}

function area(l, w) {
  return l * w;
}

function vol(l, w, h) {
  return area(l, w) * h;
}

var z = square(3) + cube(9) - area(3, 4) * vol(5, 6, 7);
var y = cube(square(3) - cube(2));
var x = area(square(cube(2)), cube(square(3)));

debugger;
