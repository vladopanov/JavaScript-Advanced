var specialConsole = (function() {
    function formatMessage(arr) {
    var message = arr[0];
    var placeholders = message.match(/\{\d+}/g);
    var maxNumber = -1;
        if (!placeholders) {
            return message;
        }
    if (placeholders.length)
        placeholders.forEach(function (placeholder) {
            var number = parseInt(placeholder.replace(/[{}]/g, ''));
            if (maxNumber < number) {
                maxNumber = number;
            }
            if (maxNumber > arr.length - 2) {
                message = "There are not enough arguments passed to the function!";
            }
        });

    for (var i = 1; i < arr.length; i++) {
        var param = arr[i];
        var placeholderNumber = i - 1;
        var pattern = '{' + placeholderNumber + '}';
        message = message.replace(pattern, param);
    }

    return message;
}

    function writeLine(){
        var message = formatMessage(arguments);
        console.log(message);
    }

    function writeError(){
        var message = formatMessage(arguments);
        console.error(message);
    }

    function writeWarning(){
        var message = formatMessage(arguments);
        console.warn(message);
    }

    function writeInfo(){
        var message = formatMessage(arguments);
        console.info(message);
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    };
})();

specialConsole.writeLine("Object: {0}", { name: "Gosho", toString: function() { return this.name }});