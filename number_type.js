function numberType(input){
    if (input == 0)
        return 'The input value is a neutral number'
    else if (input > 0)
        return 'The input value is a positive number'
    else
        return 'The input value is a negative number'
}
let value1 = 0
let value2 = 200
let value3 = -88

console.log(numberType(value1))
console.log(numberType(value2))
console.log(numberType(value3))