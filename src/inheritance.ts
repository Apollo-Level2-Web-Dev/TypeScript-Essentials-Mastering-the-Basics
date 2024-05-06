{
    //
    // parent class / super class
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sound(): void {
            console.log("Animal makes sound!")
        }
    }

    // subclass / child class
    class Dog extends Animal {
        color: string;

        constructor(name: string, age: number, color: string) {
            super(name, age);
            this.color = color;
        }

        sound(): void {
            console.log("Dog makes sound!")
        }
    }

    const dog = new Dog("Buddy", 3, "white");

    console.log(dog.name)
    //
}