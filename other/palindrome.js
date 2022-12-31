function isPalindrome(text) {
  const length = text.length;

  for (var i = 0; i < length / 2; i++) {
    if (text[i] !== text[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  isPalindrome,
};
