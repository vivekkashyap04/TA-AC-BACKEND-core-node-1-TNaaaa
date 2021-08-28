function square(a) {
  return a * a;
}

const rectangle = (l, b) => l * b;
function areaOfCircle(r) {
  return Math.floor(Math.PI * r * r);
}

module.exports = {
  square: square,
  rectangle: rectangle,
  circle: areaOfCircle,
};
