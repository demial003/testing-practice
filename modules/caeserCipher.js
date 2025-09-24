const caeserCipher = (str, n) => {
  return [...str]
    .map((el) => {
      let code = el.charCodeAt(0);
      let shift = n > 0 ? n : 26 + (n % 26);
      if (code >= 97 && code <= 122) {
        code = ((code - 97 + shift) % 26) + 97;
      }
      if (code >= 65 && code <= 90) {
        code = ((code - 65 + shift) % 26) + 65;
      }
      return String.fromCharCode(code);
    })
    .join("");
};

module.exports = { caeserCipher };
