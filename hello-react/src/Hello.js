// function Hello(props) {
//   const name = props.name ?? 'Romain';
//   return (
//     <div className="Hello">
//       hello {name}!
//     </div>
//   );
// }

function Hello({ name = 'Romain' }) {
  return (
    <div className="Hello">
      hello {name}!
    </div>
  );
}

export default Hello;
