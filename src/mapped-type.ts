{
    //
    type Person = {
        name: string;
        id: number;
        age: number;
    }

    // name | id | age

    type PersonReadOnly = { [key in keyof Person]: Person[key] | null };

    // type PersonReadOnly = {
    //     readonly name: string;
    //     readonly id: number;
    //     readonly age: number;
    // }

    const person1: Person = {
        name: "Shafayet bhai",
        id: 101,
        age: 16
    };

    person1.name = "Jhankar bhai"

    console.log(person1.name)

    // const person2:PersonReadOnly  = person1;
    // person2.name = 'fahim'
    //

}