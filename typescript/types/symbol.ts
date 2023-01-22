console.log(Symbol("leetrue") === Symbol("leetrue")); // false

const sym = Symbol(); // 고유한 형태의 어떠한 값

const obj = {
  [sym]: "value",
};

// obj["sym"]; 접근이 불가
obj[sym];
