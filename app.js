// Arrow Functions


// const logger = (log) => {
//     console.log(log);
// }

// const logger1 = (log) => console.log(log);
// const logger2 = log => console.log(log);

// const sum = (a, b) => {
//     return {
//         a: a,
//         b: b,
//     }
// }

// const sum2 = (a, b) => ({ a: a, b: b });

// console.log(sum(2, 2));
// console.log(sum2(2, 2));


// 1. Định nghĩa key: value cho object
// var name = 'Hà Nội';
// var price = 1000;

// var course = {
//     name: name,
//     price: price,
// };


// var course = {
//     name,
//     price
// };

// console.log(course);

// 2. Định nghĩa method cho object

// var course = {
//     name,
//     price,
//     getName: function() {
//         return name;
//     },

//     getName1() {
//         return name;
//     }
// };

// console.log(course.getName());

// 3. Định nghĩa key cho object dưới dạng biến

// var fieldName = 'name';
// var fieldPrice = 'price';

// const course = {
//     [fieldName]: 'JavaScript',
//     [fieldPrice]: 1000,
// };

// console.log(course); 

// const obj1 = arrToObj([
//    ['name', 'Son Dang'], 
//    ['age', 21], 
//    ['address', 'Ha Noi']
// ])
// console.log(obj1)
// // Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }

// const obj2 = arrToObj([
//    ['name', 'Duc Long'], 
//    ['age', 18], 
//    ['address', 'Ha Noi']
// ])
// console.log(obj2)
// // Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }

// // function arrToObj(arr) {
// //     return arr.reduce((obj, item) => {
// //         const [key, value] = item;
// //         obj[key] = value;
// //         return obj;
// //     }, {});
// // }


// Destructuring

// var array = ['JavaScript', 'PHP', 'Ruby'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

// var [a, b, c] = array;
// console.log(a, b, c);

// var [a, , c] = array;
// console.log(a, c);

// var [a, ...rest] = array;

// console.log(rest); // ['PHP', 'Ruby']
// console.log(a); // 'JavaScript'

// var course = {
//     name: 'JavaScript',
//     price: 1000,
//     image: 'image-address',
//     children: {
//         name: 'ReactJS',
//     }
// };

// // var { name, price, price2 } = course;
// // console.log(name, price); // 'JavaScript' 1000

// // var { name, ...rest } = course; 

// // console.log(name); // 'JavaScript'
// // console.log(rest); // { price: 1000, image: 'image-address' }

// var {name: parentName, children: {name: childrenName}} = course;

// // console.log(children); // 'JavaScript'
// // console.log(name);


// console.log(parentName); // 'JavaScript'
// console.log(childrenName); // 'ReactJS'

// var {name, description = 'defaut description'} = course;

// console.log(description); // undefined

// console.log(description); // 'defaut description'

// // 9. rest

// function logger(...params) {
//     console.log(params);
// }

// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8)); // [1, 2, 3, 4, 5, 6, 7, 8]

// // Toán tử rest lấy ra tất cả các key còn lại chưa được lấy ra bằng destructuring

// function logger(...params) {
//     console.log(params);
// }   

// logger(1, 2, 3, 4, 5, 6, 7, 8); // [1, 2, 3, 4, 5, 6, 7, 8]

// function logger(a, b, ...params) {
//     console.log(params);
// }   

// logger(1, 2, 3, 4, 5, 6, 7, 8); // [3, 4, 5, 6, 7, 8]

// function logger({name, price, ...rest}) {
//     console.log(name);
//     console.log(price);
//     console.log(rest); // { description: 'default description' }
// }

// // console.log(description); // 'default description'
// logger({
//     name: 'JavaScript',
//     price: 1000,
//     description: 'default description',
// });

import logger from './logger.js';
import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from './constants.js';

logger('Test message...', TYPE_ERROR);