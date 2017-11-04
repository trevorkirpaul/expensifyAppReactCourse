





const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 5,
  multiply(){
    return this.numbers.map((n) => n * this.multiplyBy);
  }
}

console.log(multiplier.multiply());