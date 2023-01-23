function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString(); // no error

/* any 는 계속해서 개체를 통해 전파된다는 것에 대해 */

let looselyTyped: any = {};
let dong = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a = obj.num; // type: any
  const b = a + 1; // type: any
  return b;

  /* 누수를 막고 싶다면? */
  // const a: number = obj.num;
  // const b = a + 1;
  // return b;
}

const c = leakingAny({ num: 0 });
const d: string = c.indexOf("0");
