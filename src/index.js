import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Hello World!',
    };
  }

  render() {
    const { welcome } = this.state;
    return (
      <h1>{ welcome }</h1>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
