function add(x) {
    var sum = x;
    var isFinished = false;
    function inner(y) {
        if (y !== null) {
            sum += y;
            return inner;
        } else {
            isFinished = true;
        }
    }

    if (isFinished) {
        return sum;
    }
    return inner;
}


console.log(add(1));
console.log(add(2)(3));
add(1)(1)(1)(1)(1);
//add(1)(0)(-1)(-1);

//var addTwo = add(2);
//console.log(addTwo); // 2
//console.log(addTwo(3)); // 5
//console.log(addTwo(3)(5)); //10
