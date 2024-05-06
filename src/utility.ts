{
    //
    type Person = {
        name: string;
        id: number;
        age: number;
        address?: string;
    }

    const data1: Partial<Person> = {
        name: "Mir bhai",
        id: 303,
        age: 50
    }

    const data2: Required<Person> = {
        name: "Mir bhai",
        id: 303,
        age: 50,
        address: "khulna"
    }


    type PickType = Pick<Person, 'name' | 'id' | 'age'>
    const data3: PickType = {
        name: "fahim",
        id: 202,
        age: 34
    }

    type OmitType = Omit<Person, 'address' | 'age'>

    type ReadonlyType = Readonly<Person>


    type MyObjType = {
        name: string;
        age: string;
        address: string;
        education: string;
        bio: string;
    }

    type MyObj = Record<string, string>

    const data4: MyObj = {
        name: "fahim",
        age: '23',
        address: 'khulna',
        education: 'bsc in cse',
        bio: 'this is bio',
        dateofbirth: '23fdsf'
    }

    // 
    //
}