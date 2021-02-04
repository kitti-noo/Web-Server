//1 random a number ranged from 10 to 70 (only integer)
// console.log(Math.floor(Math.random()*(60))+10);

//---------------------------------------

//2 check if a string conains a search text
// const search = '';
// const message = 'Hello JavaScript';

// const searchMessage = (search) => {
//     console.log(message.indexOf(search) >= 0);
// }
// searchMessage('a');

//---------------------------------------

//3 merge two arrays into a new array

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];

// const mergeArrays = [...arr1,...arr2];
// console.log(mergeArrays);

//--------------------------------------

//4 use .map to create new number array

// const strArr = ['1', '2', '3', '4', '5', '6', '7'];

// const numberArr = strArr.map((number) => {
//     return parseInt(number);
// });
// console.log(strArr);
// console.log(numberArr);

//--------------------------------------

//5 use .filter to create a new array that does not contain null value

// const arr = [1, 3, 4, 5, null, 2, null, -4, null]

// const filtered = arr.filter((item) => {
//     return item !== null ;
//  });

// console.log(filtered);

//---------------------------------------

//6 use .reduce to find the minimum value in an array

// const arr = [-1, -6, 10, 20, -3, 4];

// const miniArr = arr.reduce((prev,item) => {
//     return prev < item ? prev : item;
// });
// console.log(miniArr);

//----------------------------------------

//7 use .findIndex to check wheter the array contains even number

// const arr = [1, 3, 5, 7, 8, 9, 21];

// const findArr = arr.findIndex((number,index) => {
//     return number % 2 === 0;
// });
// console.log(findArr);

//----------------------------------------

//8 use .sort to order number in an array asc

// const arr = [1,2,3,4,5,6]

// const sortArr = arr.sort((a,b) => {
//     return a - b;
// });
// console.log(sortArr);

//----------------------------------------

//9 use .sort to order string in an array asc

const arr = ['z', 'c', 'd', 'g']
const sortArr = arr.sort((a, b) => {
    return a.charCodeAt() - b.charCodeAt();
});
console.log(sortArr);

//----------------------------------------