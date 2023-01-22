const person1 = { name: "Dobby", age: 78 };

// Object 라는 전역 내장 객체를 이용해서 .create 를 하면 object literal 을 통해 객체를 생성
const person2 = Object.create({ name: "Dobby", age: 78 }); // create(o: object | null)
// const person3 = Object.create(49); Argument of type 'number' is not assignable to parameter of type 'object'.

let yes: object = {};
yes = { name: "YOON" };
yes = [{ name: "YOON" }];

/* Error case */
// yes = 20;
// yes = "YOON";
// yes = true;
// yes = 100n;
// yes = Symbol();
// yes = null;
// yes = undefined;

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
/* Error case */
// create(12);
// create("string");
// create(false);
// create(undefined);
