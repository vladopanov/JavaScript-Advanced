var specialConsole = (function() {
    function writeLine(){
        console.log();
    }

    function writeError(){
        console.error();
    }

    function writeWarning(){
        console.warn();
    }

    function writeInfo(){
        console.info();
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    };
})();

specialConsole.writeLine("Message: hello");