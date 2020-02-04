import React from 'react';

class Display extends React.Component {
  render() {
    return(
      <div class="result">
        {props.result}
      </div>
    );
  }
}
