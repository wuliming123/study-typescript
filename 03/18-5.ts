// 剩余参数
function bulidName(firstName: string, ...restOfName: string[]): string {
    return firstName + ' '
}

let buildNameFn: (fname: string, ...rest: string[]) => string = bulidName