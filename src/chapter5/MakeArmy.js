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
    var shooters = [];
    for (var i = 0; i < 10; i++) {
        (function (i) {
            var shooter = function () {
                console.log(i);
            };
            shooters.push(shooter);
        })(i);
    }
    return shooters;
}
var army = makeArmy();
army[0]();
army[5]();
