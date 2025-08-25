class Employee {
  constructor(public name: string) {}
}

export class Manager extends Employee {
  manage(): void {
    console.log(`${this.name} is managing`);
  }
}

export class Developer extends Employee {
  code() {
    console.log(`${this.name} is coding`);
  }
}
