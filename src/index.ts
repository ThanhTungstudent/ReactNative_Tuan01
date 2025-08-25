import { log } from "console";
import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat, Dog } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Circle, Square } from "./bai13";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Product } from "./bai8";
import { Developer, Manager } from "./bai14";
import { Book1, Library } from "./bai15";

// Bai 1
console.log("Bai 1");
const person = new Person("Pham Thanh Tung", 20);
person.information();

// Bai 2
console.log("\nBai 2");
const student = new Student("Pham Thanh Tung", 20, 10);
student.allInfo();

// Bai 3
console.log("\nBai 3");
const car = new Car("Toyota", "Camry", 2025);
car.showCarInfo();

// Bai 4
console.log("\nBai 4");
const rectangle = new Rectangle(10, 20);
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
];
console.log("\nAll product: \n");
products.forEach((p) => p.getProduct());
const productFilter = products.filter((pro) => pro.price > 100);
console.log("/nProduct with price > 100\n");
productFilter.forEach((p) => p.getProduct());

// Bai 10
console.log("/nBai 10\n");
const user = new Account("Pham Thanh Tung", "123456789", "dinotimo");
console.log(`Verify: ${user.verify("1234567")}`);

// Bai 11
console.log("\nBai 11\n");
const dog = new Dog("Dino");
dog.bark();
const cat = new Cat("luon");
cat.meow();
// Bai 12
console.log("\nBai 12\n");
const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim();

// Bai 13
console.log("\nBai 13\n");
const square = new Square(10);
const cricle = new Circle(5);
console.log("Square area: ", square.area());
console.log("\nCricle area: ", cricle.area());

// Bai 14
log("\nBai 14\n");
const manager = new Manager("Dino");
const coder = new Developer("Timo");
manager.manage();
coder.code();

// Bai 15
log("\nBai 15\n");
const lib = new Library();
lib.addBook(new Book1("1984", "Orwell"));
lib.getBooks();
