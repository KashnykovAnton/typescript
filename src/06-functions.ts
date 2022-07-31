// --Example 1
// Params of function don't inference!!!
// Default value is ANY and it's BAD
// Have to define types for each param!

// const newFunction = function(x,y){
//     return x+y
// }

// newFunction(2,3)
// newFunction([], {})
// newFunction('a', 'b')

const newFunction = function(x: number, y: number): number {
    return x + y
}

// TS can guess what type will be in res. But if it needed - we can define it directly (): number {}
const res = newFunction(2, 3)

console.log(res)

// -- Example 2 - arrow functions
// The same
// if param is unnecessary  - mark it by ?
const newArrowFunction = (x: number, y: number): number => {
    return x + y
}
newArrowFunction(5, 10)

// -- Example 3 - rest
const fn = (a: number, b: number, c: number, ...restParams: number[]) => {}

fn(1,2,3,4,5,6,7,8,9)
// fn(1,2,3,4,5,6,'seven',8,true)

// -- Example 3 - type to all function
// We can add type to all function:
type AddFnA = (a: number, b: number) => number

const fnA: AddFnA = (param1, param2) => {
    return param1 + param2
}

fnA(10, 20)
// fnA('a', 'b')

// type AddFnB = (a: string, b: string) => string
// const fnB: AddFnB = (str1, str2) => {}
// // Error - nothing to return, but in type we add tghat string needed to be return

// console.log(fnB)

// Write functions by interface - is not recommended

// -- Example 4 - void
// if function is nothing to return - VOID. In this caes - TS don't look inside function
const log = (message: string): void => {}
log('hello')

// -- Example 5 - typisation of the methods inside function
interface IPizza {
    size: 'small' | 'medium' | 'large';
    toppings: string[];
    // logSize: () => void;
    logSize(): void;
    // if method is unnecessary  - mark it by ? before ()
    getSize?(): string;
    addTopping(topping: string): void;
}

const pizza: IPizza = {
    size: 'medium',
    toppings: ['sause', 'mushrooms'],
    logSize() {
        console.log(this.size)
    },
    getSize() {
        return this.size
    },
    addTopping(topping){
        this.toppings.push(topping)
    },
}

console.log(pizza)



export  {}
