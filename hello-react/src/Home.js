import React from 'react';
import Hello from './Hello';

// function Home() {
//   const h2El = React.createElement('h2', {}, 'Home page');
//   const divEl = React.createElement('div', { className: 'Home'}, h2El);

//   return divEl;
// }

// function Home() {
//   return React.createElement(
//     'div',
//     { className: 'Home' },
//     React.createElement('h2', {}, 'Home page'),
//   );
// }

function Home() {
  // const helloEl = React.createElement(Hello, { name: 'Romain'});
  const prenom = 'Romain';
  return (
    <div className="Home">
      <h2>hello</h2>
      <Hello />
      <Hello name="Romain" />
      <Hello name={prenom} />
    </div>
  );
}

export default Home;
