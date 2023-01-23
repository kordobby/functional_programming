// any 가 가지고있는 불안정성을 조금이라도 해소하고자 들어온 것
declare const maybe: unknown;

// const aNumber: number = maybe; // Type 'unknown' is not assignable to type 'number'.

if (typeof maybe === "number") {
  const aNumber: number = maybe;
}

if (maybe === true) {
  // runtime 에 maybe 는 true가 됨
  const aBoolean: boolean = maybe;
  //   const aString: string = maybe;
}

if (typeof maybe === "string") {
  // type of type guard
  const aString: string = maybe;
  // const aNumber: number = maybe; //error
}
