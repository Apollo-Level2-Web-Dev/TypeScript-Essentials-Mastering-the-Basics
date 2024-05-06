{
    //
    class Person {
        private _name: string;
        private _age: string;

        constructor(name: string, age: string) {
            this._name = name;
            this._age = age;
        }

        get getName(): string {
            return this._name
        }

        get getAge(): string {
            return this._age
        }

        set setName(name: string) {
            this._name = name;
        }

        set setAge(age: string) {
            this._age = age;
        }
    }

    const p1 = new Person("Firoz", '12');
    p1.setName = "Fahim"
    p1.setAge = "23"


    console.log(p1.getName)
    console.log(p1.getAge)
    //
}