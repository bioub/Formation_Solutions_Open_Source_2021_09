import React, { useState } from 'react';
import Clock from './Clock';
import Counter from './Counter';
import Hello from './Hello';
import Helloworld from './Helloworld';
import LoginForm from './LoginForm';
import MultiStateButton from './MultiStateButton';
import MultiStateButtonControlled from './MultiStateButtonControlled';
import Select from './Select';
import Todos from './Todos';

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
  const prenoms = ['Toto', 'Titi', 'Tata'];
  const [prenom, setPrenom] = useState('Titi');

  // const helloEl = React.createElement(Hello, { name: 'Romain'});

  return (
    <div className="Home">
      <h2>hello</h2>
      <Hello />
      <Hello name="Romain" />
      <Hello name={prenom} />
      <h2>clock</h2>
      <Clock />
      <h2>counter</h2>
      <Counter />
      <h2>login-form</h2>
      <LoginForm />
      <h2>select</h2>
      <Select
        selected={prenom}
        items={prenoms}
        onSelected={(prenom) => setPrenom(prenom)}
      />
      <p>Vous avez sélectionné : {prenom}</p>

      <h2>exercice 1</h2>
      <Helloworld />
      {/* Exercice 1
      Dans le composant hello-world :
      - créer un state name avec en valeur 'Toto'
      - afficher ce nom dans paragraphe à la place de AFFICHER_LE_NOM_ICI
      - afficher ce nom dans le champs
      - écouter l'événement onChange comme dans login-form et mettre à jour le name
      en temps réel avec setState (le composant se rafraichira tout seul) */}

      <h2>exercice 2</h2>
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} />
      <MultiStateButtonControlled
        items={prenoms}
        selected={prenom}
        onSelected={(prenom) => setPrenom(prenom)}
      />
      {/* Exercice 2
      Dans le composant multi-state-button :
      - récupérer la valeur items qui vient des props (composant home)
      - créer une propriété index sur le state avec comme valeur initiale 0 dans multi-state-button
      - remplacer AFFICHER_L_ELEMENT_ACTIF par l'élément du tableau dont l'indice se trouve dans index
      - au click du bouton incrementer index de 1
      - s'il n'y a plus d'élément à cette indice, revenir à 0
      (le composant se rafraichira tout seul) */}

      <h2>exercice 3</h2>
      {/* <Todos /> */}
      {/* Exercice 3
      - afficher la propriété inputValue dans le champs
      - lorsqu'on saisi dans le champs mettre à jour inputValue
      - boucler sur la propriété todos pour recréer le contenu de todos-list :
      <div>
        <span>Pain</span>
      </div>
      <div>
        <span>Lait</span>
      </div>
      - écouter l'événement du formulaire, désactiver-le en appelant la méthode
      preventDefault() de l'objet event puis ajouter un objet todo au tableau sur ce modèle
      { id: Math.random(), title: 'valeur saisie', completed: true }
      L'ajout peut se faire via la syntaxe :
      [
        ...this.state.todos,
        { id: Math.random(), title: 'valeur saisie', completed: true }
      ]
      (le composant se rafraichira tout seul) */}
    </div>
  );
}

export default Home;
