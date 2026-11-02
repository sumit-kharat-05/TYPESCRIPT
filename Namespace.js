var Geometry;
(function (Geometry) {
    Geometry.PI = Math.PI;
    let Circle;
    (function (Circle) {
        function area(r) {
            return Geometry.PI * r * r;
        }
        Circle.area = area;
        function circumferrence(r) {
            return 2 * Geometry.PI * r;
        }
        Circle.circumferrence = circumferrence;
    })(Circle = Geometry.Circle || (Geometry.Circle = {}));
    let rectangle;
    (function (rectangle) {
        function area(w, h) {
            return w * h;
        }
        rectangle.area = area;
    })(rectangle = Geometry.rectangle || (Geometry.rectangle = {}));
})(Geometry || (Geometry = {}));
console.log(Geometry.Circle.area(5).toFixed(2));
console.log(Geometry.rectangle.area(5, 4));
export {};
