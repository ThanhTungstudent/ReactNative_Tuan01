"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.Book1 = void 0;
class Book1 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
exports.Book1 = Book1;
class User1 {
    constructor(username) {
        this.username = username;
    }
}
class Library {
    constructor() {
        this.book = [];
    }
    addBook(book) {
        this.book.push(book);
    }
    getBooks() {
        this.book.forEach((b) => console.log(b));
    }
}
exports.Library = Library;
