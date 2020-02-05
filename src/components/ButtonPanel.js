import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="panel">
    <div>
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" color="orange" />
    </div>
    <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="x" color="orange" />
    </div>
    <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" color="orange" />
    </div>
    <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" color="orange" />
    </div>
    <div>
      <Button name="0" wide />
      <Button name="." />
      <Button name="=" color="orange" />
    </div>
  </div>
);

export default ButtonPanel;
