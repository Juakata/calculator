import Big from 'big-js';

const operate = (n1, n2, operation) => {
  let result = new Big(0);
  const x = new Big(n1);
  const y = new Big(n2);
  switch (operation) {
    case '+':
      result = x.plus(y);
      break;
    case '-':
      result = x.minus(y);
      break;
    case '*':
      result = x.times(y);
      break;
    case '/':
      if (y === 0) {
        return 'Math Error';
      }
      result = x.div(y);
      break;
    case '%':
      result = n1 % n2;
      break;
    default:
      break;
  }
  return String(result);
};

export default operate;
