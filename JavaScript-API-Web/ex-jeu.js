// équivalent à import (spécifique à Node.js)
// Module CommonJS
const readline = require('readline');

// configure readline pour lire sur le clavier (process.stdin)
// et écrire les questions dans le terminal (process.stdout)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jouer() {
  // pose la question tout de suite mais ne bloque pas le thread pour
  // obtenir la réponse (async)
  rl.question('Quel est le nombre entier entre 0 et 100 ? ', (answer) => {
    console.log('Vous avez saisi : ' + answer);

    // rejouer
    jouer();

    // quitter (si trouvé)
    // rl.close();
  });
}

jouer();

// ^
// |                            question
// |question                    jouer
// |jouer                       =>
// +----------------------------ENTREE----------------->
