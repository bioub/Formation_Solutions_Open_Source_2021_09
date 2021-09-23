import './Select.css';

import { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  handleItemClick(item) {
    const { onSelected = () => {} } = this.props;
    onSelected(item);
    this.setState({
      open: false,
    });
  }
  render() {
    const { open } = this.state;
    const { selected = '', items = [] } = this.props;

    const itemsJsx = items.map((it) => (
      <div key={it} className={it === selected ? 'item current' : 'item'} onClick={() => this.handleItemClick(it)}>{it}</div>
    ));

    return (
      <div className="Select">
        <div
          className="selected"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {selected}
        </div>
        {open && <div className="items">{itemsJsx}</div>}
      </div>
    );
  }
}

export default Select;
