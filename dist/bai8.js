"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getProduct() {
        console.log(`Product: ${this.name} - ${this.price}`);
    }
}
exports.Product = Product;
