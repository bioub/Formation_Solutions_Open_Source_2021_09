const coords = {
  x: 1,
  y: 2,
};


// const x = coords.x ?? 0;
// const y = coords.y ?? 0;
// const z = coords.z ?? 0;

// Object destructuring
//       { x: 1, y: 2}
// const { x: x, y: y} = coords;


// Shorthand property
// const x = 1;
// const coords1 = { x: x };
// const coords1 = { x };

// Object destructuring + Shorthand property
//       { x: 1, y: 2}
// const { x, y } = coords;

// Object destructuring + Shorthand property + Default param
//       { x: 1, y: 2}
const { x = 0, y = 0, z = 0 } = coords;

console.log(x, y, z);

// const x = coords.x ?? 0;
// const y = coords.y ?? 0;
// const z = coords.z ?? 0;
