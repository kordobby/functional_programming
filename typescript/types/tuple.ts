let x: [string, number];

// 순서와 길이가 늘 같아야함
x = ["string", 1];
// x = [3, "string"]; // Error
// x = ["string", 3, "hello"];
// x[2];
// Argument of type 'number' is not assignable to parameter of type 'object'.

const person: [string, number] = ["Bart", 12];
const [first, second] = person;
// const [first, second, third] = person;
// Tuple type '[string, number]' of length '2' has no element at index '2'.
