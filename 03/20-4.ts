// 泛型
function identity<T>(arg: T): T {
    return arg
}

let myIdentity: <T>(arg: T) => T = identity

// 可以这样，不建议，建议用T
let myIdentity2: <U>(arg: U) => U = identity

// 泛型对象
let myIdentity3: { <T>(arg: T): T } = identity



interface GnericIdentityFn {
    <T>(arg: T): T
}
let myIdentity4: GnericIdentityFn  =  identity


interface GnericIdentityFn1<T> {
    <T>(arg: T): T
}number
let myIdentity5: GnericIdentityFn1<>  =  identity