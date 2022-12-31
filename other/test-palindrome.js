const { isPalindrome } = require("./palindrome");

const input = [
  "092289",
  "992299",
  "12291",
  "982289",
  "22022022",
  "2301",
  "2013",
  "1001",
  "756564",
  "101 1",
  "766567",
  "756546",
  "2002",
  "91019",
  "765567",
];

(() => {
  const palindrome = input.filter((value) => isPalindrome(value));
  console.log({ palindrome });
})();
