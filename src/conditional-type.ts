{
    //Conditional type
    type CheckString<T> = T extends string ? string : unknown;

    type IsString = CheckString<number>

    interface Person {
        name: string;
        age: number;
    };

    type hasOwnProperty<T> = T extends keyof Person ? true : false;

    type checking = hasOwnProperty<'name'>
    //

}