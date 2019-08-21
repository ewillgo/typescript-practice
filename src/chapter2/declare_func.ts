// let greetUnname: (name: string) => string;
//
// greetUnname = (name: string): string => {
//   if (name) {
//     return "Hi, " + name;
//   }
// };

let greetUnname: (name: string) => string = (name: string): string => {
  if (name) {
    return "Hi, " + name;
  }
};

// function add(a: number, b: number, c: number): number {
//   return a + b + c;
// }

// function add(a: number, b: number, c?: number): number {
//
//   let sum = a + b;
//
//   if (c !== undefined) {
//     sum += c;
//   }
//
//   return sum;
// }

// function add(a: number, b: number, c: number = 0): number {
//   return a + b + c;
// }
//
// console.log(add(10, 20));
// console.log(add(10, 20, 30));

function add(...args: number[]): number {

  let result: number = 0, i = 0;

  for (let i: number = 0; i < args.length; i++) {
    result += i;
  }

  return result;

}

type callback = (json: any) => void;

let cb: callback = (json: any) => {
  console.log(json);
};

cb("abc");
