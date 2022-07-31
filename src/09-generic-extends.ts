// -- Example 1
// In this case TS knows, that .length not exist on all types. Onle on arrays and strokes
// const logLength = <T>(arg: T) => {
//     console.log(arg.length)
// }

// -- Example 2
// We have to extend generic - to say it that arg contain "length"
// const logLength = <T extends {length: number}>(arg: T) => {
//     console.log(arg.length)
// }

// console.log(logLength([1, 2, 3, 4, 5]))
// console.log(logLength('someStroke'))
// Boolean and number don't contain "length" - error!
// console.log(logLength(true))
// console.log(logLength(5))

// -- Example 3
// We can do it with interface
interface ILength {
    length: number
}

const logLength = <T extends ILength>(arg: T) => {
    console.log(arg.length)
}

console.log(logLength([1, 2, 3, 4, 5]))
console.log(logLength('someStroke'))

// -- Example 4
interface IPerson {
    firstName: string,
    lastName: string,
}

const addFullName = <P extends IPerson>(person: P) => {
    return {
        ...person, 
        fullName: `${person.firstName} ${person.lastName}`
    }
}

console.log(addFullName(
    {
        firstName: "John",
        lastName: "Black",
    }
))

console.log(addFullName(
    {
        firstName: "John",
        lastName: "Black",
        age: 2,
    }
))

// Error - there is no "firstName" and "lastName"
// console.log(addFullName({
//         age: 2,
//     }))


export {}