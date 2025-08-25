"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai8_1 = require("./bai8");
const bai14_1 = require("./bai14");
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
products.forEach((p) => p.getProduct());
const productFilter = products.filter((pro) => pro.price > 100);
console.log("/nProduct with price > 100\n");
productFilter.forEach((p) => p.getProduct());
// Bai 10
console.log("/nBai 10\n");
const user = new bai10_1.Account("Pham Thanh Tung", "123456789", "dinotimo");
console.log(`Verify: ${user.verify("1234567")}`);
// Bai 11
console.log("\nBai 11\n");
const dog = new bai11_1.Dog("Dino");
dog.bark();
const cat = new bai11_1.Cat("luon");
cat.meow();
// Bai 12
console.log("\nBai 12\n");
const bird = new bai12_1.Bird();
bird.fly();
const fish = new bai12_1.Fish();
fish.swim();
// Bai 13
console.log("\nBai 13\n");
const square = new bai13_1.Square(10);
const cricle = new bai13_1.Circle(5);
console.log("Square area: ", square.area());
console.log("\nCricle area: ", cricle.area());
// Bai 14
(0, console_1.log)("\nBai 14\n");
const manager = new bai14_1.Manager("Dino");
const coder = new bai14_1.Developer("Timo");
manager.manage();
coder.code();
