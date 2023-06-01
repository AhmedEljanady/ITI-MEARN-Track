exports.sum = (vals) => {
  //[1,2,4,2]
  let sum = 0;

  vals.forEach((val) => {
    sum += val;
  });

  return sum; //9
};

exports.positive = (vals) => {
  return vals.filter((x) => {
    return x > 0;
  });
};

// positive([1,8,-2,-10])  //[1,8]
