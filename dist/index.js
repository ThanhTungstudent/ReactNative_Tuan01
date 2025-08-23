"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
// Bai 1
console.log("Bai 1");
const person = new bai1_1.Person("Pham Thanh Tung", 20);
person.information();
// Bai 2
console.log("\nBai 2");
const student = new bai2_1.Student("Pham Thanh Tung", 20, 10);
student.allInfo();
// Bai 3
console.log("\nBai 3");
const car = new bai3_1.Car("Toyota", "Camry", 2025);
car.showCarInfo();
