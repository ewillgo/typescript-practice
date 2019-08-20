var Character = /** @class */ (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    Character.prototype.greet = function (name) {
        return name ? "Hi, " + name + "! my name is " + this.fullname : "Hi, my name is " + this.fullname;
    };
    return Character;
}());
var spark = new Character("Will", "Chen");
console.log(spark.greet());
console.log(spark.greet("Tom"));
