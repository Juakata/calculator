import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { value } = props;
  return (
    <div>
      <h2>{ value }</h2>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
