import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";


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

