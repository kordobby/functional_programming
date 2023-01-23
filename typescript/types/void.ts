// 타입 추론 : function returnVoid(message: string): void
function returnVoid(message: string): void {
  console.log(message);

  //   return;
  //   return undefined;
}

// const r: void
const r = returnVoid("리턴이 없다.");
