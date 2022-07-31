
// Types can be: number, string, boolean, null, undefined, any, object

// -- Example 1
// let age = 5
// age = 'five'
// console.log(age)

// -- Example 2
let age: number = 5
console.log(age)

const firstName: string = "Bill"
console.log(firstName)

// -- Example 3
// type inference !!!
let value: any = 5
value = 'five'
console.log(value)
// NOT RECCOMENDED to do variables with type ANY!!!!

// -- Example 4
// // type object
// let user: object;
// // Not reccomended to use type OBJECT - it is very general - not usable

// -- Example 5
// type composition
let id: string | number = 5
id = '5'
console.log(id)

export {}
