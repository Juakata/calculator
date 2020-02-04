import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['AC', '+/-', '%', '+',
        '7', '8', '9', 'X',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '0', '.', '='],
    };
  }

  render() {
    const { names } = this.state;
    const buttons = names.map((key, name) => <Button name={name} key={key} />);

    return (
      <div className="grid-4">{buttons}</div>
    );
  }
}
