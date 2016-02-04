var add = (function () {
    var sum = 0;

    function inner(y) {
        sum += y;
        return add;
    }

    inner.toString = function () {
        return sum;
    };

    return inner;
})();


console.log(add(1).toString());
console.log((add(2)(3)).toString());
console.log((add(1)(1)(1)(1)(1)).toString());
console.log((add(1)(0)(-1)(-1)).toString());

var addTwo = add(2);
console.log(addTwo.toString());
console.log(addTwo(3).toString());
console.log((addTwo(3)(5)).toString());