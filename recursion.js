function factorial(x) {
  if (x === 1) {
    return x;
  }
  else {
    return x *= factorial(x-1);
  }
}

console.log(factorial(5));
