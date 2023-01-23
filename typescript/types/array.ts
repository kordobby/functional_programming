let list: number[] = [1, 2, 3];

// jsx 나 tsx 에서 충돌이 날 수 있어서 윗 방법을 많이 사용함
let newList: Array<number> = [4, 5, 6];

let unionList: (number | string)[] = [1, 2, 3, "4"];
