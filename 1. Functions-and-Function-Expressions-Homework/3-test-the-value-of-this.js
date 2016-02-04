function testContext() {
    console.log(this.toString());
}

function func() {
    testContext();
}

//Envoked directly from the global scope where in this case 'this' is the window.
testContext();

//Again - 'this' is the window. The function 'func' calls the 'testContext' /reference/ which is in the global scope.
func();

//This time we make an instance of a new variable /object/ and the the scope is inside the defined variable - 'this' is the variable 'obj'.
var obj = new testContext();