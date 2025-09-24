const analyzeArray = (arr) => {
  let sum = 0;
  let min = Infinity;
  let max = 0;
  for (let el of arr) {
    sum += el;
    if (el > max) max = el;
    if (el < min) min = el;
  }

  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  };
};

module.exports = { analyzeArray };
