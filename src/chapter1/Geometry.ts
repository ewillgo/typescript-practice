module Geometry {

  export interface Vector2dInterface {

    toArray(callback: (x: number[]) => void): void;

    length(): number;

    normalize();

  }

  export class Vector2d implements Vector2dInterface {

    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    length(): number {
      return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    normalize() {
      let len = 1 / this.length();
      this._x *= len;
      this._y *= len;
    }

    toArray(callback: (x: number[]) => void): void {
      callback([this._x, this._y]);
    }

  }

}

let vector: Geometry.Vector2dInterface = new Geometry.Vector2d(2, 3);
vector.normalize();
vector.toArray((arr: number[]) => {
  console.log("x: " + arr[0] + ", y: " + arr[1]);
});
