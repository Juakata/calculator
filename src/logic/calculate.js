import operate from './operate';

const calculate = (data, name) => {
  let result;

  switch (name) {
    case '+/-':
      result = data[0] * (-1);
      break;
    case '.':
      result = '.';
      break;
    case 'AC':
      result = '';
      break;
    case '=':
      result = operate(data[0], data[1], data[2]);
      break;
    default:
  }

  return result;
};

export default calculate;
