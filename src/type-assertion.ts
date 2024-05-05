{
    // Type Assertion
    let input: any = "hello world!";

    const textLength = (input as string).length;
    //console.log(textLength)

    type Foo = {
        bar: string
    }

    let foo = {} as Foo;
    foo.bar = "something";


    let value: string | number | boolean | undefined | null;
    value = 'programming hero' as string;
    value = 100 as number;

    //
}