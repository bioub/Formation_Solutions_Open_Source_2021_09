import { Component } from 'react';

// class MultiStateButtonControlled extends Component {
//   handleClick = () => {
//     const { items, selected, onSelected } = this.props;
//     const index = items.indexOf(selected);
//     onSelected(items[(index + 1) % items.length])
//   };
//   render() {
//     const { items, selected, onSelected } = this.props;
//     return (
//       <button className="MultiStateButtonControlled" onClick={this.handleClick}>
//         {selected}
//       </button>
//     );
//   }
// }

function MultiStateButtonControlled({ items, selected, onSelected }) {
  const handleClick = () => {
    const index = items.indexOf(selected);
    onSelected(items[(index + 1) % items.length])
  };
  return (
    <button className="MultiStateButtonControlled" onClick={handleClick}>
      {selected}
    </button>
  );
}

export default MultiStateButtonControlled;
