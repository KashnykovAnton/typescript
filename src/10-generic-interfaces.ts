// -- Example 1
interface User {
    id: number | string
}

const userOne: User = {id: 1}
const userTwo: User = {id: 'dbvcjdsn-2'}

console.log(userOne, userTwo)

// -- Example 2
// In this case it's better to use generics with types
interface NextUser<U> {
    id: U
}

const nextUserOne: NextUser<number> = {id: 1}
const nextUserTwo: NextUser<string> = {id: 'dbvcjdsn-2'}

console.log(nextUserOne, nextUserTwo)

// -- Example 3
interface PersonConfig<K> {
    id: number,
    name: string,
    age: number,
    relocate: boolean,
    knowledges: K
}

type KStringTab = PersonConfig<string>
type KStringArrayTab = PersonConfig<string[]>


const firstPerson: KStringTab = {
    id: 1,
    name: 'Bob',
    age: 20,
    relocate: true,
    knowledges: 'JS'
}

const secondPerson: KStringArrayTab = {
    id: 2,
    name: 'Jack',
    age: 30,
    relocate: false,
    knowledges: ['JS', 'TS']
}

console.log(firstPerson, secondPerson)

export {}