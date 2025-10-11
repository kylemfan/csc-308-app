// test_functions.js

function div(a, b) {
  return a / b;
}

function containsNumbers(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= '0' && text[i] <= '9')
      return true;
  }
  return false;
}

exports.div = div;
exports.containsNumbers = containsNumbers;
