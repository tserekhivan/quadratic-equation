module.exports = function solveEquation(equation) {
  let A, B, C, D, x1, x2;
  A = Number(equation.substring(0, equation.indexOf(" * x^2")));
  B = equation.substring(equation.indexOf("x^2") + 4, equation.indexOf(" * x "));
  B = Number(B[0] + B.substring(2));
  C = equation.substring(equation.indexOf(" x ")+3);
  C = Number(C[0] + C.substring(2));
  D = Math.pow(B,2) - 4 * A * C;
  x1 = Math.round((-B + Math.sqrt(D)) / (2 * A));
  x2 = Math.round((-B - Math.sqrt(D)) / (2 * A));
  if (x1 < x2)
  return [x1, x2];
  else return [x2, x1];
}
