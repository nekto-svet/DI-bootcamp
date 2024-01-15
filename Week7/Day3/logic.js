/**
Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit
number is produced.
This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

let reduseNum = (num) => {
    let digits = num.toString().split('').map(Number);

    while (digits.length != 1) {
        digits = digits.reduce((acc, digit) => acc+digit);
        digits = digits.toString().split('').map(Number)
    }
    return digits[0]
}
console.log(reduseNum(493193));


//another way

let calcDigits = (num) => {
    let arr = new String(num).split('');
    let ret = 0;
    for (i in arr){
        ret += Number(arr[i])
    }
    if(ret<10){
        return ret
    } else {
        return calcDigits(ret)
    }
}

console.log(calcDigits(493193));