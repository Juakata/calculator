import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [{ id: 1, name: 'AC' }, { id: 2, name: '+/-' }, { id: 3, name: '%' },
        { id: 4, name: '÷' }, { id: 5, name: '7' }, { id: 6, name: '8' }, { id: 7, name: '9' },
        { id: 8, name: 'x' }, { id: 9, name: '4' }, { id: 10, name: '5' }, { id: 11, name: '6' },
        { id: 12, name: '-' }, { id: 13, name: '1' }, { id: 14, name: '2' }, { id: 15, name: '3' },
        { id: 16, name: '+' }, { id: 17, name: '0' }, { id: 18, name: '.' }, { id: 19, name: '=' }],
    };
  }

  render() {
    const { objects } = this.state;
    const buttons = objects.map(object => <Button object={object} key={object.id} />);

    return (
      <div className="grid-4">{buttons}</div>
    );
  }
}
