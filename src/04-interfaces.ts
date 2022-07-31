// Used to define object

// -- Example 1 - interface
// Nor recommend to use types! 
// type Person = {
//     name: string,
//     age: number,
//     profession: string,
//     experience: number,
//     relocatable: boolean,
// }

// Recommend to use interface!
interface PersonConfig {
    // Element that can't be changed marked "readonly"
    readonly name: string;
    age: number;
    // Not mandatory element defines by "?"!!!
    profession?: string;
    experience: number;
    relocatable: boolean;
}

const person: PersonConfig = {
    name: 'Bob',
    age: 25,
    // profession: 'JS developer',
    experience: 3,
    relocatable: false,
}

// Will be an error, cause name is not changable propery
// person.name = 'Bill'

// Wil be an error, cause in config - there is no such property
// person.secondName = "Black"

console.log(person)


// -- Example 2 - index signature
// this interface allows define an object with any quantities with strokes
interface WorkersConfig {
    [key: string]: number[]
}

const workers: WorkersConfig = {
    Bill: [1,2,3],
    John: [4,5,6],
    Mark: [7,8,9],
    // David: "forty",
}

console.log(workers)

// -- Example 3 - best employee
interface EmployeesConfig {
    [index: string]: number
    // [key: string]: number

}

const employees: EmployeesConfig = {
    Bob: 10,
    Adam: 25,
    Travis: 20,
    David: 5,
}

const entries = Object.entries(employees)
let bestEmployeeName = ''
let bestEmployeeProIndex = 0

for(const [name, value] of entries) {
    if (bestEmployeeProIndex <= value) {
        bestEmployeeName = name;
    }
    bestEmployeeProIndex = value;
}

console.log(bestEmployeeName)


// -- Example 4 - Extending Interfaces
interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {
    border: string
  }
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
    border: '2px',
  };

  console.log(cc)

export {}