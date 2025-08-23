"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log("Husky");
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    meow() {
        console.log("Meow");
    }
}
exports.Cat = Cat;
