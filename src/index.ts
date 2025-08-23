import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";


// Bai 1
console.log("Bai 1");
const person = new Person("Pham Thanh Tung", 20)
person.information();

// Bai 2
console.log("\nBai 2");
const student = new Student("Pham Thanh Tung", 20, 10);
student.allInfo()

// Bai 3
console.log("\nBai 3");
const car = new Car("Toyota", "Camry", 2025);
car.showCarInfo()

// Bai 4
console.log("\nBai 4");
const rectangle = new Rectangle(10, 20)
console.log(`Area: ${rectangle.area()}, Perimeter: ${rectangle.perimeter()}`);

// Bai 5
console.log("\nBai 5");
const bankAccount = new BankAccount(0);
console.log("\nNap 100");
console.log(`\nSo tai khoan sau khi nap tien: ${bankAccount.depposit(100)}`);
console.log("\nChuyen 50");
console.log(`\nSo tai khoan sau khi chuyen tien: ${bankAccount.withdraw(50)}`);





