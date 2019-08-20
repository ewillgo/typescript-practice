function test() {
}

var greet = function (name) {
  return name ? "Hi, " + name : "name is empty";
};

function sume(a, b, callback) {
  callback(a + b);
}

sume(10, 20, function (result) {
  console.log(result);
});
