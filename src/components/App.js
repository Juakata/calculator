import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0',
    };
  }

  updateResult(data, name) {
    this.setState({
      result: calculate(data, name),
    });
  }

  render() {
    const { result } = this.state;
    return (
      <div id="container">
        <Display value={result} />
        <ButtonPanel />
      </div>
    );
  }
}
