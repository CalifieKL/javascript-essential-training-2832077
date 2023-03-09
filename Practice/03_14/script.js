import Book from "./Book.js";

let LEtranger = new Book(
  "L'Étranger",
  "Albert Camus",
  "Ebooks libre et gratuits",
  1942,
  97,
  10
);
let LaPeste = new Book(
  "La Peste",
  "   Albert Camus  ",
  "  Ebooks libre et gratuits  ",
  1947,
  314,
  8
);
let mytheDeSisyphe = new Book(
  " Mythe de Sisyphe",
  "Albert Camus",
  "Charles Bolduc",
  1942,
  125,
  "something"
);
let LaChute = new Book(
  "La Chute",
  "Albert Camus",
  "Ebooks libre et gratuits",
  1956,
  86,
  10
);
let laMorteHeureuse = new Book(
  "La Morte Heureuse",
  "Albert Camus ",
  "Diane Brunet",
  1971,
  125,
  6
);
console.log(LEtranger.getDescription());
console.log(LaPeste.getDescription());
console.log(mytheDeSisyphe.getDescription());
console.log(LaChute.getDescription());
console.log(laMorteHeureuse.getDescription());
console.log("---------");
mytheDeSisyphe.setRating(7);
console.log("Mythe de Sisyphe updated rating:" + mytheDeSisyphe.getRating());
