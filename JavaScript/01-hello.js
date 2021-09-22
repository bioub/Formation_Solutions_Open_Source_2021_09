import { hello } from './01-functions.js';

const prenoms = ['Jean', 'Romain'];

for (const p of prenoms) {
  console.log(hello(p));
}
