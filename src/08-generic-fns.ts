//  -- Example 1
// In this case TS don't understand what type of values inside array will be
// const reverse = (array) => {
//     return [...array].reverse()
// }

// In this case - we define types
const reverse =<T>(array: T[]) => {
    return [...array].reverse()
}

console.log(reverse([1, 2, 3, 4, 5, 6]))
console.log(reverse(['a', 'b', 'c', 'd', 'e']))
console.log(reverse([{a: 1}, {b: 2}, {c: 3}]))

//  -- Example 2 - generic-functions with N-params
// In this case - an error will be
// const isEqual = (a: number, b: number) => {
//     return Object.is(a, b);
// }

// In this case generic hepls
const isEqual = <T, Y>(a: T, b: Y) => {
    return Object.is(a, b);
}

// This is not usual - TS determines types himself
// console.log(isEqual<number, number>(3, 3))
// console.log(isEqual<number, string>(3, "3"))
console.log(isEqual(3, 3))
console.log(isEqual(3, "3"))


// Another case
const isEqualNew = <T>(a: T, b: T) => {
    return Object.is(a, b);
}

console.log(isEqualNew(3, 3))
console.log(isEqualNew("2", "3"))

//  -- Example 3 - rest
const foo = <N, T>(mult: N, ...rest: T[]) => {}

console.log(foo(2, [1, 2, 3]))
console.log(foo('name', ['Bill', 'John', 'Adam']))



export {}