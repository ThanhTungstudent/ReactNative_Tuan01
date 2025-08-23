export class Product{
    name: string
    price: number
    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }

    getProduct(): void {
        console.log(`Product: ${this.name} - ${this.price}`);
    }
}