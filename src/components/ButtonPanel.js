import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const objects = [{ id: 1, name: 'AC' }, { id: 2, name: '+/-' }, { id: 3, name: '%' },
  { id: 4, name: '÷' }, { id: 5, name: '7' }, { id: 6, name: '8' }, { id: 7, name: '9' },
  { id: 8, name: 'x' }, { id: 9, name: '4' }, { id: 10, name: '5' }, { id: 11, name: '6' },
  { id: 12, name: '-' }, { id: 13, name: '1' }, { id: 14, name: '2' }, { id: 15, name: '3' },
  { id: 16, name: '+' }, { id: 17, name: '0' }, { id: 18, name: '.' }, { id: 19, name: '=' }];

const ButtonPanel = props => {
  const panel = objects.map(object => {
    const { id, name } = object;
    if (id % 4 === 0 || id === 19) {
      return <Button name={name} key={id} color="orange" onClick={() => props.clickHandler(name)} />;
    } if (object.name === '0') {
      return <Button name={name} key={id} onClick={() => props.clickHandler(name)} wide />;
    }
    return <Button name={name} key={id} onClick={() => props.clickHandler(name)} />;
  });
  return (
    <div className="panel">
      {panel}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
