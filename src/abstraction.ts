{
    //
    abstract class Shape {
        abstract calculateArea(): number;
    }

    class Rectangle extends Shape {

        constructor(private height: number, private width: number) {
            super();
        }

        calculateArea(): number {
            return this.height * this.width;
        }
    }

    const r = new Rectangle(3, 5);
    console.log(r.calculateArea())
    //
}