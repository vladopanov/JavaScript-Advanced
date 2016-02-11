var shapeModule = (function () {

    Object.prototype.extend = function(properties) {
        function f() {}
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    };

    var Shape = {
        init: function init(color) {
            if (!(color.match(/#[\w+]{6}/g))) {
                throw new Error("The color must be in hexadecimal format!");
            }
            this._color = color;
            return this;
        },
        toString: function toString() {
            return "color: " + this._color;
        }
    };

    var Circle = Shape.extend({
        init: function init(color, oX, oY, r) {
            this._super.init.call(this, color);
            this._oX = oX;
            this._oY = oY;
            this._r = r;
            return this;
        },

        toString: function toString() {
            var result = "Circle" + "\n";
            result += this._super.toString.call(this) + "\n";
            result += "coordinates: " + this._oX + ", " + this._oY + "\n";
            result += "radius: " + this._r;
            return result;
        }
    });

    var Rectangle = Shape.extend({
        init: function init(color, aX, aY, width, height) {
            this._super.init.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._width = width;
            this._height = height;
            return this;
        },

        toString: function toString() {
            var result = "Rectangle" + "\n";
            result += this._super.toString.call(this) + "\n";
            result += "left upper corner coordinates: " + this._aX + ", " + this._aY + "\n";
            result += "width: " + this._width + "\n";
            result += "height: " + this._height;
            return result;
        }
    });

    var Triangle = Shape.extend({
        init: function init(color, aX, aY, bX, bY, cX, cY) {
            this._super.init.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            this._cX = cX;
            this._cY = cY;
            return this;
        },

        toString: function toString() {
            var result = "Triangle" + "\n";
            result += this._super.toString.call(this) + "\n";
            result += "point A coordinates: " + this._aX + ", " + this._aY + "\n";
            result += "point B coordinates: " + this._bX + ", " + this._bY + "\n";
            result += "point C coordinates: " + this._cX + ", " + this._cY;
            return result;
        }
    });

    var Line = Shape.extend({
        init: function init(color, aX, aY, bX, bY) {
            this._super.init.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            return this;
        },

        toString: function toString() {
            var result = "Line" + "\n";
            result += this._super.toString.call(this) + "\n";
            result += "point A coordinates: " + this._aX + ", " + this._aY + "\n";
            result += "point B coordinates: " + this._bX + ", " + this._bY;
            return result;
        }
    });

    var Segment = Shape.extend({
        init: function init(color, aX, aY, bX, bY) {
            this._super.init.call(this, color);
            this._aX = aX;
            this._aY = aY;
            this._bX = bX;
            this._bY = bY;
            return this;
        },

        toString: function toString() {
            var result = "Segment" + "\n";
            result += this._super.toString.call(this) + "\n";
            result += "point A coordinates: " + this._aX + ", " + this._aY + "\n";
            result += "point B coordinates: " + this._bX + ", " + this._bY;
            return result;
        }
    });

    return {
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle,
        Line: Line,
        Segment: Segment
    };

})();

var segment = Object.create(shapeModule.Segment.init("#ff00ff", 100, 200, 30, 60));
console.log(segment.toString());