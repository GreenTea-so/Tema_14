var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Triangle = /** @class */ (function () {
    function Triangle(parties) {
        this.parties = parties;
    }
    Triangle.prototype.getP = function () {
        return this.parties.a + this.parties.b + this.parties.c;
    };
    return Triangle;
}());
var TriangleRectangular = /** @class */ (function (_super) {
    __extends(TriangleRectangular, _super);
    function TriangleRectangular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleRectangular.prototype.getS = function () {
        return (this.parties.a * this.parties.b) / 2;
    };
    return TriangleRectangular;
}(Triangle));
var TriangleIsosceles = /** @class */ (function (_super) {
    __extends(TriangleIsosceles, _super);
    function TriangleIsosceles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleIsosceles.prototype.getS = function () {
        return (this.parties.b * this.parties.h) / 2;
    };
    return TriangleIsosceles;
}(Triangle));
var params = {
    a: 1,
    b: 2,
    c: 3
};
var triangle = new Triangle(params);
var triangleRectangular = new TriangleRectangular(params);
console.log(triangleRectangular.getS());
