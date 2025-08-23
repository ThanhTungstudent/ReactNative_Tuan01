import { Person } from "./bai1";
import { Student } from "./bai2";


// Bai 1
console.log("Bai 1");
const person = new Person("Pham Thanh Tung", 20)
person.information();

// Bai 2
console.log("\n Bai 2");
const student = new Student("Pham Thanh Tung", 20, 10);
student.allInfo()
