var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function updatedSum(target, key, descriptor) {
    descriptor.value = function (x, y) {
        const output = x + y;
        return `The Output Of ${x} And ${y} Is: ${output}`;
    };
}
class CustomMaths {
    sum(x, y) {
        return x + y;
    }
}
__decorate([
    updatedSum
], CustomMaths.prototype, "sum", null);
const cm2 = new CustomMaths();
console.log(cm2.sum(25, 25));
export {};
