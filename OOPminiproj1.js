var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Students = /** @class */ (function () {
    function Students() {
        this.gender = "female";
    }
    Students.prototype.getNationality = function () {
        return this.nationality;
    };
    return Students;
}());
var UnderGraduates = /** @class */ (function (_super) {
    __extends(UnderGraduates, _super);
    function UnderGraduates(batch) {
        var _this = _super.call(this) || this;
        _this.batch = batch;
        return _this;
    }
    return UnderGraduates;
}(Students));
var undergrad = new UnderGraduates(5);
undergrad.nationality = "Greek";
console.log(undergrad.getNationality());
