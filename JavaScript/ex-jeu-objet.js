// équivalent à import (spécifique à Node.js)
// Module CommonJS
const readline = require('readline');

// Exercice 1
// Reprendre les fonctions précédentes et le regrouper dans un objet
// Random déclaré avec objet literal
const Random = {
  get() {
    return Math.random();
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

// Exercice 2
// Créer une classe Jeu
// avec une méthode jouer (qui correspond à l'ancienne fonction jouer)
// les variables : rl, essais et entierAlea doivent devenir des propriétés de cette classe
// pas besoin de passer de paramètres à Jeu
// const game = new Jeu();
// game.jouer();
class Jeu {
  // configure readline pour lire sur le clavier (process.stdin)
  // et écrire les questions dans le terminal (process.stdout)
  #rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  essais = [];

  constructor(options = {}) {
    // this.min = options.min ?? 0;
    // this.max = options.max ?? 100;
    this.min = options.min !== undefined ? options.min : 0;
    this.max = options.max !== undefined ? options.max : 100;
    this.entierAlea = Random.getInt(this.min, this.max);
  }
  jouer() {
    if (this.essais.length) {
      console.log('Vous avez déjà saisi : ' + this.essais.join(', '));
    }

    // pose la question tout de suite mais ne bloque pas le thread pour
    // obtenir la réponse (async)
    this.#rl.question(
      `Quel est le nombre entier entre ${this.min} et ${this.max} ? `,
      (answer) => {
        console.log('Vous avez saisi : ' + answer);

        const entierSaisi = Number.parseInt(answer, 10);

        if (Number.isNaN(entierSaisi)) {
          console.log('Il faut saisir un entier');
          return this.jouer();
        }

        this.essais.push(entierSaisi);

        if (entierSaisi < this.entierAlea) {
          console.log('Trop petit');
          this.jouer();
        } else if (entierSaisi > this.entierAlea) {
          console.log('Trop grand');
          this.jouer();
        } else {
          console.log('Gagné');
          this.#rl.close();
        }
      },
    );
  }
}

// Exercice 3
// Passer un objet pour configurer Jeu avec 2 propriétés min et max
// const game = new Jeu({min: 10, max: 20});
// game.jouer();
// Prévoir des valeurs par défaut pour min (0) et max (100)
// const game = new Jeu({max: 20});

const game = new Jeu();
game.jouer();

// ^
// |                            question
// |question                    jouer
// |jouer                       =>
// +----------------------------ENTREE----------------->
