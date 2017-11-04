class Person {
  constructor(name = 'Anon', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreet() {
    return `Hello, I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age}.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();    
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}


class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreet() {
    let getGreet = super.getGreet();
    this.homeLocation && (getGreet += ` I am visiting from ${this.homeLocation}`)
    return getGreet;
  }
}

const me = new Traveler('Trevor Kirpaul', 29, 'Hopewell');
console.log(me.getGreet());


const other = new Traveler(null, null, null);
console.log(other.getGreet());