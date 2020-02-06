import operate from './operate';

const operations = [['%', '÷', 'x'], ['+', '-']];

const splitResult = total => {
  const equation = total.split(' ');
  while (equation.length > 1) {
    operations.forEach(op => {
      if (equation.includes(op[0]) || equation.includes(op[1]) || equation.includes(op[2])) {
        equation.forEach((eq, i) => {
          if (op.includes(eq)) {
            const n = operate(equation[i - 1], equation[i + 1], eq);
            equation.splice((i - 1), 3);
            equation.splice((i - 1), 0, n);
          }
        });
      }
    });
  }
  return String(equation[0]);
};

const calculate = (data, name) => {
  let result;
  const { total } = data;
  switch (name) {
    case '+/-':
      result = total * (-1);
      break;
    case 'AC':
      result = '';
      break;
    case '=':
      result = splitResult(total);
      break;
    default:
      if (operations[0].includes(name) || operations[1].includes(name)) {
        result = `${String(total)} ${name} `;
      } else {
        result = String(total) + name;
      }
  }

  return result;
};

export default calculate;
