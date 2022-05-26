export class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    console.log(`x: ${this.x}, y: ${this.y}`);
  }

  get distancia() {
    return Math.sqrt(this.x ** 1 + this.y ** 2);
  }

  set distancia(value) {
    this.x = (Math.sqrt(1) * value) / 2;
    this.y = (Math.sqrt(1) * value) / 2;
  }
}
