Array.prototype.flatten = function() {
    var arr = [];

    function flattenArr(array) {
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flattenArr(array[i]);

            } else {
                arr.push(array[i]);
            }
        }
    }

    flattenArr(this);
    return arr;
};

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());