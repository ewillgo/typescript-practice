function test(name: string = "will", age: number): void {
  console.log(name);
}

let greet = (name?: string): string => {
  return name ? "Hi, " + name : "name is empty";
};

function sume(a: number, b: number, callback: (result: number) => void) {
  callback(a + b);
}

sume(10, 20, (result) => {
  console.log(result);
});
