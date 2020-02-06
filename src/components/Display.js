import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  let { result } = props;
  result = result || '0';
  return (
    <div className="result">
      <h2>{ result }</h2>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
