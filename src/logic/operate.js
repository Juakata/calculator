import Big from 'big';

const operate = (n1, n2, operation) => {
  let result = new Big(0);
  switch (operation) {
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
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
