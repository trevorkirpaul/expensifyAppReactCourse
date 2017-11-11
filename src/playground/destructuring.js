//Obj destructuring

// const person = {
//   name: 'Trevor',
//   age: 29,
//   location: {
//     city: 'Richmond',
//     temp: 52
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name: firstName = 'anon', age } = person;

// console.log(`${firstName} is ${age}.`)


// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}!`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }


// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(`Publisher: ${publisherName}`);


// 
// Array Destructuring
// 

// const address = ['1299 S Juniper Street', 'Philladelphia', 'Pennsylvania', '19147'];

// const [ , city = 'Queens', state = 'New York' ] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ coffeeHot, ,mediumPrice ] = item;

console.log(`A medium ${coffeeHot} costs ${mediumPrice}`);