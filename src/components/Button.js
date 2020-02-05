import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;
  const className = wide ? 'grey zero' : color;
  return (
    <button type="button" className={className} width="100">{name}</button>
  );
};


Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  color: 'grey',
  wide: false,
};

export default Button;
