
function* functest() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

let y = functest();
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
console.log(y.next());
