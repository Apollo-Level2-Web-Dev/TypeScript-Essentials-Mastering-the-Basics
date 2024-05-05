{
    // Generics

    // const numArray: number[] = [1, 2, 3, 4];
    // const stringArray: string[] = ['shafayet', 'mezba', 'mir', 'jhankar'];
    // const booleanArray: boolean[] = [true, true, false];

    type GenericArray<T> = Array<T>;

    const numArray: GenericArray<number> = [1, 2, 3, 4];
    const stringArray: GenericArray<string> = ['shafayet', 'mezba', 'mir', 'jhankar'];
    const booleanArray: GenericArray<boolean> = [true, true, false];


    // interface with generics
    interface IUser<U, T> {
        name: string;
        age: number;
        profileData: U,
        id: T
    };

    const user1: IUser<{
        bio: string;
        profilePhoto: string
    }, string> = {
        name: "Fahim Ahammed Firoz",
        age: 40,
        profileData: {
            bio: "this is bio",
            profilePhoto: "photo link"
        },
        id: '123abc'
    }

    const user2: IUser<{
        bio: string;
        dateOfBirth: string
    }, string> = {
        name: "Mezba bhai",
        age: 16,
        profileData: {
            bio: "this is bio",
            dateOfBirth: "29 Jan, 2004"
        },
        id: 'xyz123'
    }

    //console.log(user1)



    // function with generics
    const showMessage = <T>(input: T): T => {
        return input;
    }

    const result = showMessage<string>("Hello, PH!");
    //console.log(result)

    // Constrants
    const squreNum = <T extends number>(num: T) => num * num;

    console.log(squreNum<number>(5))

    //

}