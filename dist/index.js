"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
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
// Bai 4
console.log("\nBai 4");
const rectangle = new bai4_1.Rectangle(10, 20);
console.log(`Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);
// Bai 5
console.log("\nBai 5");
const bankAccount = new bai5_1.BankAccount(0);
console.log("\nNap 100");
console.log(`\nSo tai khoan sau khi nap tien: ${bankAccount.depposit(100)}`);
console.log("\nChuyen 50");
console.log(`\nSo tai khoan sau khi chuyen tien: ${bankAccount.withdraw(50)}`);
