/* null 과 undefined 를 할당할 수 있게 하려면 union type 을 이용해야 함 */

// let name: string = null;
// let age: number = undefined;

// let u: undefined = null;
let v: void = undefined;

/* string 뿐만 아니라 null을 가질 수도 있다고 표기 : 유니온 타입 (합집합 느낌) */
let union: string | null = null;
union = "Curby";
