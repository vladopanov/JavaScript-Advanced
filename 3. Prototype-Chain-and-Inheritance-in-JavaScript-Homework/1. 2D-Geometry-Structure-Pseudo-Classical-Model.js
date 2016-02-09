var shapeModule = (function () {

    if (!Object.create) {
        Object.create = function (proto) {
            function F() {}
            F.prototype = proto;
            return new F();
        };
    }

    var Shape = (function () {
        function Shape(color) {
            if (!(color.match(/#[\w+]{6}/g))) {
                throw new Error("The color must be in hexadecimal format!");
            }
            this._color = color;
        }

        Shape.prototype.toString = function () {
            return "color: " + this._color;
        };

        return Shape;
    })();

    var Circle = (function () {
        function Circle(color, oX, oY, r) {
            Shape.call(this, color);
            this._oX = oX;
            this._oY = oY;
            this._r = r;
        }
        Circle.prototype = Object.create(Shape.prototype);
        Circle.prototype.constructor = Circle;

        Circle.prototype.toString = function () {
            var result = Circle.name + "\n";
            result += Shape.prototype.toString.call(this) + "\n";
            result += "coordinates: " + this._oX + ", " + this._oY + "\n";
            result += "radius: " + this._r;
            return result;
        };

        return Circle;
    })();

    var Ractangle = (function () {
        function Rectangle(color, aX, aY, width, height) {
            Shape.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._width = width;
            this._height = height;
        }
        Rectangle.prototype = Object.create(Shape.prototype);
        Rectangle.prototype.constructor = Rectangle;

        Rectangle.prototype.toString = function () {
            var result = Rectangle.name + "\n";
            result += Shape.prototype.toString.call(this) + "\n";
            result += "coordinates of top left corner: " + this._aX + ", " + this._aY + "\n";
            result += "width: " + this._width + "\n";
            result += "height: " + this._height;
            return result;
        };

        return Rectangle;
    })();

    var Triangle = (function () {
        function Triangle(color, aX, aY, bX, bY, cX, cY) {
            Shape.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;
        }
        Triangle.prototype = Object.create(Shape.prototype);
        Triangle.prototype.constructor = Triangle;

        Triangle.prototype.toString = function () {
            var result = Triangle.name + "\n";
            result += Shape.prototype.toString.call(this) + "\n";
            result += "coordinates of A point: " + this._aX + ", " + this._aY + "\n";
            result += "coordinates of B point: " + this._bX + ", " + this._bY + "\n";
            result += "coordinates of C point: " + this._cX + ", " + this._cY;
            return result;
        };

        return Triangle;
    })();

    var Line = (function () {
        function Line(color, aX, aY, bX, bY) {
            Shape.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
        }
        Line.prototype = Object.create(Shape.prototype);
        Line.prototype.constructor = Line;

        Line.prototype.toString = function () {
            var result = Line.name + "\n";
            result += Shape.prototype.toString.call(this) + "\n";
            result += "coordinates of A point: " + this._aX + ", " + this._aY + "\n";
            result += "coordinates of B point: " + this._bX + ", " + this._bY;
            return result;
        };

        return Line;
    })();

    var Segment = (function () {
        function Segment(color, aX, aY, bX, bY) {
            Shape.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
        }
        Segment.prototype = Object.create(Shape.prototype);
        Segment.prototype.constructor = Segment;

        Segment.prototype.toString = function () {
            var result = Segment.name + "\n";
            result += Shape.prototype.toString.call(this) + "\n";
            result += "coordinates of A point: " + this._aX + ", " + this._aY + "\n";
            result += "coordinates of B point: " + this._bX + ", " + this._bY;
            return result;
        };

        return Segment;
    })();

    return {
        Circle: Circle,
        Rectangle: Ractangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    }

})();

var circle = new shapeModule.Circle('#ff00ff', 23, 150, 15);
console.log(circle.toString() + "\n");

//var rect = new shapeModule.Rectangle('blue', 111, 200, 300, 150);
//console.log(rect.toString() + "\n");
//
//var triangle = new shapeModule.Triangle('yellow', 100, 150, 200, 250, 300, 350);
//console.log(triangle.toString() + "\n");
//
//var line = new shapeModule.Line('yellow', 100, 150, 200, 250);
//console.log(line.toString() + "\n");
//
//var segment = new shapeModule.Segment('tomato', 140, 150, 200, 250);
//console.log(segment.toString() + "\n");