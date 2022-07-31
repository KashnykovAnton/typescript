// Type consruction/composition

//  --Example 1
// type ID = number;
// const userId: ID = 5
// userId = 'five'

type ID = number | string;
const userId: ID = 5
const postId: ID = 'five'

console.log(userId, postId)

//  --Example 2
// Tuples in type construction
// type ALWAYS from capital letter!
type Coords = [number, number]
const coords: Coords = [50.123, 60.123]
console.log(coords)

//  --Example 2
// Union in type construction
type ReqStatus = 'request' | 'success' | 'error'

// const requestStatus: ReqStatus = ''; 
// const requestStatus: ReqStatus = 'rejected'; 
const requestStatus: ReqStatus = 'request'; 
console.log(requestStatus)

export {}