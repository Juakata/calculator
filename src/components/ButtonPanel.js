import React from 'react';
import Button from './Button';

const objects = [{ id: 1, name: 'AC' }, { id: 2, name: '+/-' }, { id: 3, name: '%' },
  { id: 4, name: '÷' }, { id: 5, name: '7' }, { id: 6, name: '8' }, { id: 7, name: '9' },
  { id: 8, name: 'x' }, { id: 9, name: '4' }, { id: 10, name: '5' }, { id: 11, name: '6' },
  { id: 12, name: '-' }, { id: 13, name: '1' }, { id: 14, name: '2' }, { id: 15, name: '3' },
  { id: 16, name: '+' }, { id: 17, name: '0' }, { id: 18, name: '.' }, { id: 19, name: '=' }];

const ButtonPanel = () => {
  const panel = objects.map(object => {
    if (object.id % 4 === 0 || object.id === 19) {
      return <Button name={object.name} key={object.id} color="orange" />;
    } if (object.name === '0') {
      return <Button name={object.name} key={object.id} wide />;
    }
    return <Button name={object.name} key={object.id} />;
  });
  return (
    <div className="panel">
      {panel}
    </div>
  );
};

export default ButtonPanel;
