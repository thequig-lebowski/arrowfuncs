// /**
//  * To run this file in Gitpod, use the 
//  * command node arrow-functions.js in the terminal
//  */

// // Vanilla JavaScript Function

// // Arrow Function With Parameters
// const addTwoNumbers = (a, b) => {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum)

// // Single Line Arrow Function With Parameters
// // Below is also valid, also used for returning multiple lines
// // const addTwoNumbers2 = (a, b) => (a + b);
// const addTwoNumbers2 = (a, b) => a + b;
// let sum2 = addTwoNumbers2(6, 4);
// console.log(sum2);

// // Implicit Returns
// const saySomething = message => console.log(message);
// saySomething('Hello there!!');

// const sayHello = () => console.log('Hello');
// sayHello();

// // Returning Multiple Lines

// const returnMultipleLines = () => (
//     `<p>
//         This is a multiline string!
//      <p>`
// );
// console.log(returnMultipleLines());


let nums = [1, 2, 3, 4, 5];
let results =[];

for (let num of nums){
    results.push(num*2);
}

console.log(results);

// using map()
const multByTwo = function (num) {
    return num * 2
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);

const newMapResults = nums.map(function(num) {return num*2})
console.log(newMapResults);

const simplifiedWithArrow = nums.map(num => num*2);
console.log(simplifiedWithArrow);



// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const studentsWithIdsOdj = students.map(student => Object.entries(students));
console.log(studentsWithIdsOdj);