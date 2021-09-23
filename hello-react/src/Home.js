import React from 'react';

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
  return (
    <div className="Home">
      <h2>hello</h2>

    </div>
  );
}

export default Home;
