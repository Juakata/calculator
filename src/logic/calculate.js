import operate from './operate';

const operations = [['%', '÷', 'x'], ['+', '-']];
const operations2 = ['%', '÷', 'x', '+', '-'];

const addMinus = total => {
  const equation = total.split(' ');
  const last = equation.length - 1;
  equation[last] = `-${equation[last]}`;
  return equation.join(' ');
};

const validateEquation = equation => {
  let result = true;
  equation.forEach(eq => {
    if (eq === '') {
      result = false;
    }
  });
  return result;
};

const splitResult = total => {
  const equation = total.split(' ');
  let result = 'Math Error';
  if (validateEquation(equation)) {
    try {
      operations.forEach(op => {
        while (equation.includes(op[0]) || equation.includes(op[1]) || equation.includes(op[2])) {
          equation.forEach((eq, i) => {
            if (op.includes(eq)) {
              const n = operate(equation[i - 1], equation[i + 1], eq);
              equation.splice((i - 1), 3);
              equation.splice((i - 1), 0, n);
            }
          });
        }
      });
      result = String(equation[0]);
    } catch (exception) {
      result = 'Math Error';
    }
  }

  return result;
};

const calculate = (data, name) => {
  let result;
  const { total } = data;
  switch (name) {
    case '+/-':
      result = addMinus(total);
      break;
    case 'AC':
      result = '';
      break;
    case '=':
      result = splitResult(total);
      break;
    default:
      if (operations2.includes(name)) {
        result = `${String(total)} ${name} `;
      } else {
        result = String(total) + name;
      }
  }

  return result;
};

export default calculate;
