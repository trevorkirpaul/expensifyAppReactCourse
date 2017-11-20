const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    // resolve('This is my other resolved data');
    reject('Something went wrong');
  }, 1500);
  
});

console.log('before');


// then = if promise fulfilled, catch = broken promise
promise.then((data) => {
  console.log(data);
}).catch((e) => {
  console.log('error:', e);
});

console.log('after');