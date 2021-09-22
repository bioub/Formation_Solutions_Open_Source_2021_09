// setTimeout(function() {
//   return console.log('A')
// }, 1000);

setTimeout(() => console.log('A'), 500); //
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// pile d'appel
// ^
// |
// |                              lg               lg    lg               lg
// |st - st - st - st - lg ..⟳.. cbB ..⟳..        cbA - cbD ..⟳..       cbC
// 0--------------------E---------B-----------------A-----D---------------C--> temps

// file d'attente (0ms) : cbB
// file d'attente (7ms) :
// file d'attente (499ms) : cbA - cbD
// file d'attente (500ms) : cbD
// file d'attente (501ms) :
// file d'attente (999ms) : cbC
// file d'attente (1000ms) :


// Dans quel ordre sorte les lettres ?
// 1 - A B C D E
// 2 - E B A D C <--- bonne réponse
// 3 - B E A D C
// 4 - B E D A C
// 5 - E B D A C

