// 1. Basic Data Types
let age: number = 25;
let userName: string = "Sarah";
let isStudent: boolean = true;
let fruits: string[] = ["apple", "banana", "orange"];
let person: { name: string; age: number } = { name: "John", age: 30 };
// Create a symbol
const mySymbol: symbol = Symbol("my_Symbol");
console.log(mySymbol);

const Denoting = {
  [mySymbol]: "new_symbol",
};

// 2. Object, Optional, and Literal Types:
type User = {
  name: string;
  age?: number;
};

let user1: User = { name: "Alice" };
let user2: User = { name: "Bob", age: 25 };
let direction: "left" | "right" | "up" | "down" = "right";

// 3. Functions in TypeScript:
function multiply(a: number, b: number): number {
  return a * b;
}

let result: number = multiply(5, 3);
console.log(result); // Output: 15

// 4. Spread and Rest Operator:
let numbers: number[] = [1, 2, 3];
let newNumbers: number[] = [...numbers, 4, 5];

function restOperator(...args: number[]): number[] {
  return args;
}

console.log(restOperator(1, 2, 3, 4, 5, 6));

// 5. Destructuring in TypeScript:
let point = { g: 10, h: 20 };
let { g, h } = point;
console.log(g, h); // Output: 10 20

// 6. Type Alias in TypeScript:
type Coordinates = {
  x: number;
  y: number;
};

let position: Coordinates = { x: 50, y: 100 };

// 7. Union & intersection Types in TypeScript:
type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean };
type CatOrDog = Cat | Dog;
type CatAndDog = Cat & Dog;

let pet1: CatOrDog = { name: "Fluffy", purrs: true };
let pet2: CatAndDog = { name: "Buddy", purrs: true, barks: true };

//8. Ternary Operator, Optional Chaining & Nullish Coalescing Operator:
let x: number | undefined = undefined;
let y = x !== undefined ? x : 0; // Ternary Operator
let z = x ?? 0; // Nullish Coalescing Operator

let obj = { prop: { nestedProp: 10 } };
let value = obj.prop?.nestedProp; // Optional Chaining

//9. Never, Unknown, and Nullable Types:
function noReturn(): never {
  while (true) {
    console.log(
      "Ami infinite loop ami Definite kichui return korbo na karon ami ghurtei thakbo ha ha ha!"
    );
  }
}

let userInput: unknown;
let userFullName: string = userInput as string; // Type Assertion

let nullableValue: string | null = null;

//
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};

const employee: Employee = { name: "Alice", age: 30, employeeId: 12345 };
