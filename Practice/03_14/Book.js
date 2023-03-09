class Book {
  constructor(name, author, publisher, yearPublished, pages, rating) {
    if (this._isValidString(name)) this.name = name.trim();
    if (this._isValidString(author)) this.author = author.trim();
    if (this._isValidString(publisher)) this.publisher = publisher.trim();
    if (this._isValidYear(yearPublished)) this.yearPublished = yearPublished;
    if (this._isValidInteger(pages)) this.pages = pages;
    if (this._isValidRating(rating)) this.rating = rating;
  }
  _isValidString(str) {
    return typeof str === "string";
  }
  _isValidInteger(num) {
    return Number.isInteger(num);
  }
  _isValidYear(year) {
    return this._isValidInteger(year) && year.toString().length == 4;
  }
  _isValidRating(rating) {
    return this._isValidInteger(rating) && rating >= 0 && rating <= 10;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    if (this._isValidString(name)) this.name = name.trim();
  }
  getAuthor() {
    return this.author;
  }
  setAuthor(author) {
    if (this._isValidString(author)) this.author = author.trim();
  }
  getPublisher() {
    return this.publisher;
  }
  setPublisher(publisher) {
    if (this._isValidString(publisher)) this.publisher = publisher.trim();
  }
  getYearPublished() {
    return this.yearPublished;
  }
  setYearPublished(yearPublished) {
    if (this._isValidYear(yearPublished)) this.yearPublished = yearPublished;
  }
  getPages() {
    return this.pages;
  }
  setPages(pages) {
    if (this._isValidInteger(pages)) this.pages = pages;
  }
  getRating() {
    return this.rating;
  }
  setRating(rating) {
    if (this._isValidRating(rating)) this.rating = rating;
  }
  getAge() {
    let currYear = new Date().getFullYear();
    return currYear - this.yearPublished;
  }
  getDescription() {
    return (
      "name: " +
      this.name +
      "\tauthor: " +
      this.author +
      "\tpublisher: " +
      this.publisher +
      "\tpages: " +
      this.pages +
      "\n\tyear published: " +
      this.yearPublished +
      "\tage: " +
      this.getAge() +
      "\trating: " +
      this.rating +
      "/10"
    );
  }
}

export default Book;
