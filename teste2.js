function isFibonacci(num) {
  let a = 0;
  let b = 1;
  let c = 0;

  if (num === a || num === b) {
    return true;
  }

  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }

  return c === num;
}

numberFromUser = 21

console.log(isFibonacci(numberFromUser));