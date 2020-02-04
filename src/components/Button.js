import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { object } = props;
  const className = object.id % 4 === 0 || object.id === 19 ? 'operator' : 'normal';
  if (object.name === '0') {
    return (
      <button type="button" id="zero">{object.name}</button>
    );
  }
  return (
    <button type="button" className={className}>{object.name}</button>
  );
};


Button.propTypes = {
  object: PropTypes.objectOf(
    PropTypes.number,
    PropTypes.string,
  ).isRequired,
};


export default Button;
