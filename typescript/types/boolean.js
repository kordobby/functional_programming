"use strict";
// type annotation
let isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
let isOk = true;
// let isNotOk: boolean = new Boolean(true);
// 'boolean' is a primitive, but 'Boolean' is a wrapper object.
// Prefer using 'boolean' when possible.
/*
1. compile : npx tsc
2. node boolean.js
*/
