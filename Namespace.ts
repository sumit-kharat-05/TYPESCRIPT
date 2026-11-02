namespace Geometry {
  export const PI = Math.PI;

  export namespace Circle {
    export function area(r: number): number {
      return PI * r * r;
    }
    export function circumferrence(r: number): number 
    {
        return 2 * PI * r;
    } 
  }
  export namespace rectangle
  {
    export function area(w:number,h:number):number
    {
        return w * h;
    }
  }
}

console.log(Geometry.Circle.area(5).toFixed(2));
console.log(Geometry.rectangle.area(5,4));

