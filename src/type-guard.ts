{
    //
    // typeof

    const isString = (input: any) => {
        if (typeof input === 'string') {
            console.log("this is string")
        }
        else {
            console.log("this is not string")
        }
    }

    //isString(3)

    const displayBrand = (data: any) => {
        if ('brand' in data) {
            console.log(data.brand);
        }
        else {
            console.log("Brand property does not exists!")
        }
    }

    // displayBrand({
    //     model: "abc",
    //     //brand: "Toyota"
    // })


    // instance of
    class X {
        name: string;

        constructor(name: string) {
            this.name = name
        }
    }

    class P {
        age: number;
        constructor(age: number) {
            this.age = age;
        }
    }

    const Y = (params: any) => {
        if (params instanceof X) {
            console.log("Yes")
        }
        else {
            console.log("No")
        }
    }

    const x = new X("Fahim");
    const p = new P(2);

    Y(p);
    //
}