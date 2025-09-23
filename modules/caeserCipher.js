const caeserCipher = (str, shift) => {
  let s = str.split("");
  let res = s.map((el) => {
    let code = el.charCodeAt(0);

    if (code >= 97 && code <= 122) {
      if (code > 122 - shift) {
        let dist = 122 - code;
        code = 96 - dist + (shift % 26);
      } else {
        code += shift % 26;
      }
    }
    if (code >= 65 && code <= 90) {
      if (code > 90 - shift) {
        let dist = 91 - code;
        code = 64 - dist + (shift % 26);
      } else {
        code += shift % 26;
      }
    }
    return String.fromCharCode(code);
  });
  return res.join("");
};

console.log(caeserCipher("abc", -1));

module.exports = { caeserCipher };
