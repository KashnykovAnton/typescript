// --Example 1
const numbers: number[] = [1, 2, 3, 4, 5]
console.log(numbers)

// const numbersWithError: number[] = [1, 2, '3']
// console.log(numbersWithError)

const names: string[] = ['Bob', 'Bill', 'John']
console.log(names)

// Different type of writing
const digits: Array<number> = [1, 2, 3, 4, 5]
console.log(digits)

// --Example 2
let cities: string[] = ['London', 'Paris', 'Madrid']
cities.push('Berlin')
// Don't allow to push another type
// cities.push(555)
console.log(cities)

// --Example 3
// type composition
const cars: (string | number)[] = ['BMW', 'Audi', 555, 666]
console.log(cars)

// --Example 3
// readonly 
// const modelCars: readonly string[] = ['X5', 'X6', 'NewModel']
const modelCars: ReadonlyArray<string> = ['X5', 'X6', 'NewModel']
// Don't alllow to push! And any other methods are blocked is too!
// modelCars.push('Tesla S')
console.log(modelCars)

// --Example 4
// Tuple
const coords: [number, number] = [50.123, 60.123]
// const coords: [number, number] = [50.123, 60.123, 70.123]
// const coords: [number, number] = [50.123, 'west']
// const coords: [number, number, string] = [50.123, 60.123]
// This means that inside coords can be array only with two elements - numbers
console.log(coords)

const rgb: [number, number, number] = [255, 255, 255]
console.log(rgb)

// --Example 5
const num: number[] = [5, 10, 15, 20, 25]
const newNum = num.filter(n => n > 10)
console.log(newNum)
// TS knows, that newNum - array of numbers, cause num - is defined

// --Example 6
const arrA: number[] = [1, 2, 3, 4, 5]
const arrB = [...arrA]
console.log(arrB)
// type inference - TS define type arrB from arrA



export {}