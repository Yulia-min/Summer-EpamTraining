const input = document.getElementById('rpn');
const output = document.getElementById('result');

async function add(firstNumber, secondNumber){
  await new Promise(r => setTimeout(r, 2000));
  return firstNumber + secondNumber;
}

async function subtract(firstNumber, secondNumber){
  await new Promise(r => setTimeout(r, 1000));
  return firstNumber - secondNumber;
}

async function multiply(firstNumber, secondNumber){
  await new Promise(r => setTimeout(r, 3000));
  return firstNumber * secondNumber;
}

async function divide(firstNumber, secondNumber){
  await new Promise(r => setTimeout(r, 4000));
  return firstNumber / secondNumber;
}

const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

async function rpnSolver(rpnString) {
  let stack = [];
  
  const tokens = rpnString.split(' ');
  for(const token of tokens) {
      if (token in operations) {
          let [y, x] = [stack.pop(), stack.pop()];
          const result = await operations[token](x, y);
          stack.push(result);
      } else {
          stack.push(parseFloat(token));
      }
  };

  return stack.pop();
};

async function rpn() {
  output.value = await rpnSolver(input.value);
}

