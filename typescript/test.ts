// const a = "LeeTrue";

let a = "Leeture";

a = 3; // Type 'number' is not assignable to type 'string'

/* -----------------
 TYPE ANNOTATION
----------------- */

let b: string;
b = "leetrue";
b = 39; // Type 'number' is not assignable to type 'string'.

function hello(b: number) {}

hello(33);
hello("leetrue"); // Argument of type 'string' is not assignable to parameter of type 'number'.
