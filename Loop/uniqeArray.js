const { aj, value } = require("./data");

/////////////////// uniqe value from array //////////////////////////

let out = {};
value.forEach((val) => {
  if (out[val.c]) {
    out[val.c].push({
      ...val,
    });
  } else {
    out = {
      ...out,
      [val.c]: [val],
    };
  }
});
//
console.log(out);

///////////////////// reduce function //////////////////////////

const aj1 = aj.reduce((acc, curr) => {
  if (curr.i < 15) {
    // acc = curr;
    acc.push(curr.a);
    // console.log("--",acc);
  }
  return acc;
}, []);
console.log(aj1);
