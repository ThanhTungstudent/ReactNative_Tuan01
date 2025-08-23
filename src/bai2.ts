import { Person } from "./bai1";

export class Student extends Person {
    grade: number;
    constructor(name: string, age: number, grade: number){
        super(name, age);
        this.grade = grade;
    }

    allInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
        
    }
}