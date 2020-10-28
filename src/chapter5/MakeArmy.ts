// function makeArmy() {
//
//   var shooters = [];
//
//   for (var i = 0; i < 10; i++) {
//
//     var shooter = function () {
//       console.log(i);
//     };
//
//     shooters.push(shooter);
//   }
//
//   return shooters;
// }

// 更多的闭包解决闭包共享同一个环境问题
function makeArmy() {
  let shooters = []

  for (let i = 0; i < 10; i++) {
    ;(function (i) {
      let shooter = function () {
        console.log(i)
      }
      shooters.push(shooter)
    })(i)
  }

  return shooters
}

let army = makeArmy()
army[0]()
army[5]()
