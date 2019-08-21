var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var myname = "remo>";
var surname = "jansen&";
var age = "10";
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var result = "";
    result += literals[0];
    for (var i = 0; i < placeholders.length; i++) {
        result += placeholders[i]
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
    result += literals[literals.length - 1];
    return result;
}
var escapeHtml = htmlEscape(__makeTemplateObject(["<h1>", " ", " ", "</h1>"], ["<h1>", " ", " ", "</h1>"]), myname, surname, age);
console.log(escapeHtml);
