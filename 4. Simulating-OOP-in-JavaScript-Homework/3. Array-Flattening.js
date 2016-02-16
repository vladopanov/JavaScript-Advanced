Array.prototype.flatten = function() {
    var arr = [];

    function flattenArr(array) {
        var i = 0,
            length = array.length;

        for (i; i < length; i += 1) {
            var el = array[i];
            if (Array.isArray(el)) {
                flattenArr(el);

            } else {
                arr.push(el);
            }
        }
    }

    flattenArr(this);
    return arr;
};

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());