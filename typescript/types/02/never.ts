function error(message: string): never {
  throw new Error(message); // throw 하면서 함수가 끝나버리고 어떤 것도 리턴하지 않음
}

// 타입 추론 : function fail(): never
function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

let lxxtrue: string = "hello";

if (typeof lxxtrue !== "string") {
  lxxtrue; // let lxxtrue: never
}

declare const dobby: string | number;

// typeof guard
if (typeof a !== "string") {
  dobby;
}

// 조건부 타입

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>; // T === {}
// const neverCheck: Indexable<{}> = ''; // Type 'string' is not assignable to type 'never'.
