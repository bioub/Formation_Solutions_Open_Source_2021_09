const nbs = [2, 3, 4];

// SPREAD operator
// conversion syntaxique d'un tableau
// vers une liste de valeur
// ex : [2, 3, 4] -> 2, 3, 4
// clone
// const cloneArray = [nbs[0], nbs[1], nbs[2]];
const cloneArray = [...nbs];

// ajoute au tableau en créant un nouveau tableau
// changement immuable
// [...nbs, 5];
// [1, ...nbs];
// [...nbs.slice(0, 1), ...nbs.slice(2)]

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...nbs));

// REST operator
// conversion syntaxique d'une une liste de valeur
// vers un tableau
// ex : 2, 3, 4 -> [2, 3, 4]

//            1, 2, 3  -> [1, 2, 3]
// 1, 2, 3, 4, 5, 6, 7 -> [1, 2, 3, 4, 5, 6, 7]
function sum2(...nbs) {
  let result = 0;

  for (const nb of nbs) {
    result += nb;
  }

  return result;
}

console.log(sum2(1, 2, 3));
console.log(sum2(1, 2, 3, 4, 5, 6, 7));

const nbs2 = [2, 3, 4];

//       [2   , 3    , 4     ]
// const [deux, trois, quatre] = nbs2;
// const deux = nbs[0];
// const trois = nbs[1];
// const quatre = nbs[2];

const [deux, ...autres] = nbs2;
console.log(autres); // [3, 4]


// ES9 SPREAD object
// convertion entre {x: 1, y: 2} -> x: 1, y: 2
const coords = {x: 1, y: 2, z: 3};
const cloneObj = {...coords};

// ES9 REST object
//    {z: 3, x: 1, y: 2}
const {z   , ...coords2d} = coords;
console.log(coords2d); // {x: 1, y: 2}
