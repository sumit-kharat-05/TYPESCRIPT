function updatedSum(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function (x: number, y: number) {
    const output = x + y;
    return `The Output Of ${x} And ${y} Is: ${output}`;
  };
}

class CustomMaths {
  @updatedSum
  sum(x: number, y: number) {
    return x + y;
  }
}

const cm2 = new CustomMaths();
console.log(cm2.sum(25, 25));