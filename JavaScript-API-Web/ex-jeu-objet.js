// équivalent à import (spécifique à Node.js)
// Module CommonJS
const readline = require('readline');

// configure readline pour lire sur le clavier (process.stdin)
// et écrire les questions dans le terminal (process.stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function getRandom() {
//   return Math.random();
// }

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Exercice 1
// Reprendre les fonctions précédentes et le regrouper dans un objet
// Random déclaré avec objet literal
const Random = {
  // ajouter les 4 méthodes
};


// Exercice 2
// Créer une classe Jeu
// avec une méthode jouer (qui correspond à l'ancienne fonction jouer)
// les variables : rl, essais et entierAlea doivent devenir des propriétés de cette classe
// pas besoin de passer de paramètres à Jeu
// const game = new Jeu();
// game.jouer();

// Exercice 3
// Passer un objet pour configurer Jeu avec 2 propriétés min et max
// const game = new Jeu({min: 10, max: 20});
// game.jouer();
// Prévoir des valeurs par défaut pour min (0) et max (100)
// const game = new Jeu({max: 20});

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà saisi : ' + essais.join(', '));
  }

  // pose la question tout de suite mais ne bloque pas le thread pour
  // obtenir la réponse (async)
  rl.question('Quel est le nombre entier entre 0 et 100 ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    const entierSaisi = Number.parseInt(answer, 10);

    if (Number.isNaN(entierSaisi)) {
      console.log('Il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      jouer();
    } else if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      jouer();
    } else {
      console.log('Gagné');
      rl.close();
    }
  });
}

const entierAlea = Random.getRandomInt(0, 100);
const essais = [];
jouer();

// ^
// |                            question
// |question                    jouer
// |jouer                       =>
// +----------------------------ENTREE----------------->
