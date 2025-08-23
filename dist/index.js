"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai8_1 = require("./bai8");
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
// Bai 8
console.log("\nBai 8");
const products = [
    new bai8_1.Product("Pen", 5),
    new bai8_1.Product("keyBoard", 10),
    new bai8_1.Product("car", 200),
    new bai8_1.Product("moto", 150),
    new bai8_1.Product("Monitor", 300),
];
console.log("\nAll product: \n");
products.forEach(p => p.getProduct());
const productFilter = products.filter(pro => pro.price > 100);
console.log("/nProduct with price > 100\n");
productFilter.forEach(p => p.getProduct());
// Bai 10
console.log("/nBai 10\n");
const user = new bai10_1.Account("Pham Thanh Tung", "123456789", "dinotimo");
console.log(`Verify: ${user.verify("1234567")}`);
