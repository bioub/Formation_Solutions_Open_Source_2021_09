// En JS on manipule souvent des objets existants

// Au niveau langage
console.log(typeof Math); // object

// Au niveau Node.js
console.log(typeof process); // object

// Au niveau Node.js + Browser
console.log(typeof console); // object

// Au niveau Browser
console.log(typeof document); // object


// L'objet est un système clé/valeur (dictionnaire)

// On peut ajouter (étendre, extension d'objet)
Math.sum = function(a, b) {
  return a + b;
};
console.log(Math.sum(1, 2)); // 3
console.log(Math.sum("1", "2")); // '12'

// modifier
Math.sum = function(a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum(1, 2)); // 3
console.log(Math.sum("1", "2")); // 3

// ou supprimer des clés/valeurs
delete Math.sum;
console.log(Math.sum); // undefined

// MAUVAISE pratique de modifier les objets
// autres que les notres (variables globales)

// MyMaths hérite de Math (et le complète)
// const MyMaths = Object.create(Math);

// MyMaths.sum = function(a, b) {
//   return Number(a) + Number(b);
// };

// console.log(MyMaths.random());

// Si besoin de créer des objets
// 2 syntaxes

// Object literal (dont dérive JSON)
// - objet très simple à créer (sans méthode si plusieurs objet)
// - objet créés une seule fois
const coords1 = {
  x: 1,
  y: 2,
};

const coords2 = {
  x: 1,
  y: 2,
};

// Pourquoi pas de méthodes dans ce cas ?
const coordsA = {
  x: 1,
  y: 2,
  sumXY() { // créé un objet de type function
    return this.x + this.y;
  }
};

const coordsB = {
  x: 1,
  y: 2,
  sumXY() { // créé un objet de type function
    return this.x + this.y;
  }
};

console.log(coordsA.sumXY() === coordsB.sumXY()); // true (1 + 2 === 1 + 2)
console.log(coordsA.sumXY === coordsB.sumXY); // false (parce que 2 fonctions)

// dans cet exemple sumXY est recréé pour chaque objet
// alors qu'elle aurait pu être créé 1 fois et partagée dans chaque objet

// Constructor Function (exotique)
// syntaxe historique
// function Coords(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Coords.prototype.sumXY = function() {
//   return this.x + this.y;
// };

// syntaxe moderne (ES2015+)
class Coords {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sumXY() {
    return this.x + this.y;
  }
}


const coords3 = new Coords(1, 2);
console.log(typeof coords3); // object
console.log(coords3.x); // 1 (la clé est dans l'objet)
console.log(coords3.sumXY()); // 1 (la clé est dans le prototype)
console.log(coords3.hasOwnProperty('x')); // true (la clé est dans un prototype parent)
console.log(coords3.hasOwnProperty('sumXY')); // false (la clé est dans un prototype parent)


const coords4 = new Coords(1, 2);
console.log(typeof coords4); // object
console.log(coords4.x); // 1

console.log(coords3.sumXY() === coords4.sumXY()); // true (1 + 2 === 1 + 2)
console.log(coords3.sumXY === coords4.sumXY); // true (parce que 1 fonction partagée)
