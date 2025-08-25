export class Book1 {
  constructor(public title: string, public author: string) {}
}

class User1 {
  constructor(public username: string) {}
}

export class Library {
  private book: Book1[] = [];
  addBook(book: Book1) {
    this.book.push(book);
  }
  getBooks(): void {
    this.book.forEach((b) => console.log(b));
  }
}
