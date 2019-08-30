multiplyTwo = (a, b) => {
    let sumStr = recursion(a, b)
    return sumStr
}

recursion = (strA, strB) => {
    if (strA.length <= 2) {
        return (parseInt(strA) * parseInt(strB)).toString()
    }
    let len = strA.length
    let m = parseInt(len / 2)
    let a1 = strA.slice(0, m)
    let b1 = strB.slice(0, m)
    let a0 = strA.slice(m)
    let b0 = strB.slice(m)
    m = len - m

    let x = recursion(a1, b1) + '0'.repeat(m * 2)
    let y = stringsAdd(recursion(a1, b0), recursion(a0, b1)) + '0'.repeat(m)
    let z = recursion(a0, b0)
    let sum = stringsAdd(x, y)
    sum = stringsAdd(sum, z)

    return sum
}

stringsAdd = (a, b) => {
    let aInd = a.length-1
    let bInd = b.length-1
    let carry = false
    let sumArr = []
    while(aInd >= 0 || bInd >= 0) {
        if (aInd >= 0 && bInd >= 0) {
            let sum = parseInt(a[aInd]) + parseInt(b[bInd])
            if (carry) {
                sum += 1
            }
            carry = sum >= 10
            sumArr.push(sum % 10)
            aInd--
            bInd--
        } else if (aInd >= 0) {
            let sum = parseInt(a[aInd]) + (carry ? 1 : 0)
            carry = sum >= 10
            sumArr.push(sum % 10)
            aInd--
        } else {
            let sum = parseInt(b[bInd]) + (carry ? 1 : 0)
            carry = sum >= 10
            sumArr.push(sum % 10)
            bInd--
        }
    }
    if (carry) {
        sumArr.push('1')
    }
    return sumArr.reverse().join('')
}

console.log(multiplyTwo('3141592653589793238462643383279502884197169399375105820974944592', '2718281828459045235360287471352662497757247093699959574966967627'))
console.log(multiplyTwo('12345', '12345'))
console.log(12345 * 12345)

//8539734222673568132630552817124543303384443810782743410108121461153273869248724694809717341559380988311547488086466295603658752
//8539734222673567705790252939087913595130043539186689203720198106916073999705592801855421606337738760009472611077150082385093232n