// let greetUnname: (name: string) => string;
//
// greetUnname = (name: string): string => {
//   if (name) {
//     return "Hi, " + name;
//   }
// };
var greetUnname = function (name) {
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
function add() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0, i = 0;
    for (var i_1 = 0; i_1 < args.length; i_1++) {
        result += i_1;
    }
    return result;
}
