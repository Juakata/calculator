import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(state => ({
      total: calculate(state, buttonName),
    }));
  }

  render() {
    const { total } = this.state;
    return (
      <div id="container">
        <Display result={total} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}
