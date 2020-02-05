import operate from './operate';

const calculate = (data, name) => {
  if (name === '+/-') {
    return data[0] * (-1);
  }
  return operate(data[0], data[1], data[2]);
};

export default calculate;
