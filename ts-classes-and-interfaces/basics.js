"use strict";
// class User {
//     name: string;
//     age: number;
//     constructor(n: string, a: number) {
//         //this.name = 'Max';
//         this.name = n;
//         this.age = a;
//     }
// }
class BasicUser {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('My age: ' + this.age);
    }
}
const max = new BasicUser('Max', 39);
const fred = new BasicUser('Fred', 34);
//max.hobbies.push('Sports');
console.log(max, fred);
