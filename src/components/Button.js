import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, wide, onClick,
  } = props;
  const className = wide ? 'grey zero' : color;
  return (
    <button type="button" className={className} onClick={onClick} width="100">{name}</button>
  );
};


Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'grey',
  wide: false,
};

export default Button;
