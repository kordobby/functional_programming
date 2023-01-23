class Person {}
class Developer extends Person {
  coding() {}
}
class StartUpDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// Developer => Developer 에다가 StartUpDeveloper => Developer 를 할당하는 경우
// Error ! Argument of type '(d: StartUpDeveloper) => Developer' is not assignable to parameter of type '(d: Developer) => Developer'.
// tellme(function sToD(d: StartUpDeveloper): Developer {
//   return new Developer();
// });
