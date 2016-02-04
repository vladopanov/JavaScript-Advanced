function printArgsInfo() {
    for(var key in arguments) {
        console.log(arguments[key] + ' (' + typeof arguments[key] + ')');
    }
}

var args  = [2, 3, 2.5, -110.5564, false];

printArgsInfo.call(null);
printArgsInfo.call(null, 2, 3, 2.5, -110.5564, false);
printArgsInfo.apply(null);
printArgsInfo.apply(null, args);