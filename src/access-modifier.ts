{
    //
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