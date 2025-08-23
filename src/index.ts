import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Product } from "./bai8";


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

// Bai 8
console.log("\nBai 8");
const products: Product[] = [
    new Product("Pen", 5),
    new Product("keyBoard", 10),
    new Product("car", 200),
    new Product("moto", 150),
    new Product("Monitor", 300),
]
console.log("\nAll product: \n");
products.forEach(p => p.getProduct())
const productFilter = products.filter(pro => pro.price > 100)
console.log("/nProduct with price > 100\n");
productFilter.forEach(p => p.getProduct())





