class Shape {
    constructor (public color: string) {}
}

class Circle extends Shape {
    constructor (color: string, public radius: number) {
        super(color);
    }

    calArea() {
        return `Circle Color:${this.color} Area:${(3.14*(this.radius**2)).toFixed(2)}`;
    }
}

class Square extends Shape {
    constructor (color: string, public side: number) {
        super(color);
    }

    calArea() {
        return `Square Color:${this.color} Area:${(this.side**2).toFixed(2)}`;
    }
}

const shape1 = new Shape("BLACK");
console.log(shape1.color);

const circle1 = new Circle("BLACK", 3.23);
console.log(circle1.calArea());

const square1 = new Square("BLACK", 4.84);
console.log(square1.calArea());