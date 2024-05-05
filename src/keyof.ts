{
    // Keyof
    interface Car {
        brand: string;
        model: string;
        year: number;
        isElectric: boolean;
    }

    type keyOfTyepe = keyof Car;
    // brand | model | year | isElectric

    const myCar: Car = {
        brand: 'tesla',
        model: '123acd',
        year: 2020,
        isElectric: true
    };

    const getPropertyValue = (obj: Car, key: keyof Car) => {
        console.log(obj[key])
    }

    getPropertyValue(myCar, 'isElectric');



    // any
    let x: any = 10;
    x = 'hello';
    console.log(x.toUpperCase())

    // unknown
    let y: unknown = 10;
    y = 'hello'
    //console.log(y.length)
    if (typeof y === 'string') {
        console.log(y.length)
    }
    //
}