// create a function that takes a value and returns it in reverse order.

function reverseDatThang(value) {
  const stringValue = String(value);
  return stringValue.split("").reverse().join("");
}

module.exports = reverseDatThang;
