/////////////////// Daily Challenge: Anagram //////////////////////

function isAnagram(str1, str2){
    let stringToCompare1 = str1.toLowerCase().replaceAll(' ', '')
    let stringToCompare2 = str2.toLowerCase().replaceAll(' ', '')
    let array1 = stringToCompare1.split('').sort()
    let array2 = stringToCompare2.split('').sort()
    return array1.join('') == array2.join('') ? true : false
}

console.log(isAnagram("Astronomer", "Moon starer"))

console.log(isAnagram("The Morse Code", "Here come dots"))

console.log(isAnagram('Bla bla bla', 'Hahahahaha'))