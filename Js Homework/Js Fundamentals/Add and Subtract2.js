function addAndSubtract(n1, n2, n3) {
  function sum(a, b) {
    return a + b;
  }
  function subtract(c) {
    return sum(n1, n2) - c;
  }
  return subtract(n3);
}