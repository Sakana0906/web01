class Rectangle {
    constructor(public width: number, public height: number) {
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle1 = new Rectangle(5, 10);
console.log(`Width: ${rectangle1.width}, Height: ${rectangle1.height}`);
console.log(`Area: ${rectangle1.getArea()}`);
console.log(`Perimeter: ${rectangle1.getPerimeter()}`);