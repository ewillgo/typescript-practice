// @logClass
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.saySomething = function (something) {
        return this.name + " " + this.surname + " says: " + something;
    };
    return Person;
}());
function logClass(target) {
}
