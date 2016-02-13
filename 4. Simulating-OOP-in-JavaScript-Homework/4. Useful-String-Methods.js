String.prototype.startsWith = function(substring) {
    var isTrue = this.slice(0, substring.length) === substring;
    if(isTrue) {
        return true;
    }
    return false;
};

String.prototype.endsWith = function(substring) {
    var isTrue = this.slice(this.length - substring.length, this.length) === substring;
    if(isTrue) {
        return true;
    }
    return false;
};

String.prototype.left = function(count) {
    if(count > this.length) {
        return this.toString();
    }
    return this.slice(0, count);
};

String.prototype.right = function(count) {
    if(count > this.length) {
        return this.toString();
    }
    return this.slice(this.length - count, this.length);
};

String.prototype.padLeft = function(count, character) {
    if(character === undefined) {
        character = ' ';
    }
    return count > this.length ? character.repeat(count - this.length) + this : this.toString();
};

String.prototype.padRight = function(count, character) {
    if(character === undefined) {
        character = ' ';
    }
    return count > this.length ? this + character.repeat(count - this.length) : this.toString();
};

String.prototype.repeat = function(count) {
    var string = '';
    for (var i = 0; i < count; i++) {
        string += this;
    }

    return string;
};

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.startsWith("This"));
//console.log(example.startsWith("this"));
//console.log(example.startsWith("other"));

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.endsWith("poses."));
//console.log(example.endsWith ("example"));
//console.log(example.startsWith("something else"));

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.left(9));
//console.log(example.left(90));

//var example = "This is an example string used only for demonstration purposes.";
//console.log(example.right(9));
//console.log(example.right(90));

// Combinations must also work
//var example = "abcdefgh";
//console.log(example.left(5).right(2));

//var hello = "hello";
//console.log(hello.padLeft(5));
//console.log(hello.padLeft(10));
//console.log(hello.padLeft(5, "."));
//console.log(hello.padLeft(10, "."));
//console.log(hello.padLeft(2, "."));

//var hello = "hello";
//console.log(hello.padRight(5));
//console.log(hello.padRight(10));
//console.log(hello.padRight(5, "."));
//console.log(hello.padRight(10, "."));
//console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
//// Alternative syntax
console.log("~".repeat(3));

// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));
