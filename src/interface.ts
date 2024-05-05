{
    //Interface
    interface Car {
        brand: string;
        model: string;
        year: number;
        isElectric: boolean;
        startEngine(): string;
        stopEngine(): void;
    }

    type CarType = {
        brand: string;
        model: string;
        year: number;
        isElectric: boolean;
        startEngine(): string;
        stopEngine(): void;
    }

    type num = number | string;


    const myCar: CarType = {
        brand: 'Tesla',
        model: 'A-123',
        year: 2024,
        isElectric: true,
        startEngine() {
            const message = "Engine Started!"
            console.log(message)
            return message;
        },
        stopEngine() {
            console.log("Engine Stoped!")
        },
    }

    console.log(myCar.brand);
    myCar.startEngine()


    type numOfArray = number[];

    interface numOfArrayInterface {
        [index: number]: string
    }

    const numArr: numOfArrayInterface = ['11', '24', '3', '4'];

    // type and interface in function
    type sum = (num1: number, num2: number) => number;

    interface sum1 {
        (num1: number, num2: number): number
    }

    const addNum: sum1 = (a, b) => a + b;
    console.log(addNum(2, 3))
    //

}