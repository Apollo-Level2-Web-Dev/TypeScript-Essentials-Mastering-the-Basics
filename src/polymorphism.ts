{
    // compile time polymorphism - method overloading
    class Calculator {
        add(x: number, y: number): number {
            return x + y;
        }

        add(x: string, y: string): string {
            return x + y + " Level 2";
        }
    }

    const calc = new Calculator();
    //console.log(calc.add(2, 3))
    //console.log(calc.add("Programming ", "Hero"))


    // run time polymorphism - method overriding

    class Animal {
        public name: string; // 
        private age: number;
        protected dob: string;

        constructor(name: string, age: number, dob: string) {
            this.name = name;
            this.age = age;
            this.dob = dob;
        }

        sound(): void {
            console.log("Animal makes sound!")
        }
    }

    class Dog extends Animal {
        color: string;

        constructor(name: string, age: number, dob: string, color: string) {
            super(name, age, dob);
            this.color = color;
        }

        sound(): void {
            console.log("Dog makes sound!")
        }

        // getAge(): void {
        //     console.log(this.age)
        // }
    }

    const dog = new Dog("Buddy", 3, "2 jan, 2020", "white");

    console.log(dog)
    //
}