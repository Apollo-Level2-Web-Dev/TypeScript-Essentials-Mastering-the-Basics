{
    //
    // class
    // interface Car {
    //     brand: string;
    //     model: string;
    //     year: number;
    //     isElectric: boolean;
    //     startEngine(): string;
    //     stopEngine(): void;
    // }

    class Car {
        brand: string;
        model: string;
        year: number;
        isElectric: boolean;

        constructor(brand: string, model: string, year: number, isElectric: boolean) {
            this.brand = brand;
            this.model = model;
            this.year = year;
            this.isElectric = isElectric
        }

        // startEngine(): string {
        //     return `${this.brand} is started!`
        // }
        // stopEngine(): void {
        //     console.log("engine stoped!")
        // }
    }

    const myCar = new Car("Tesla", "A123", 2020, true);
    myCar.model = "B321"
    console.log(myCar.model)
    //
}