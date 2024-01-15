
// 2 functions that add zeroes and crosses to the board with display 'none'
function showCrosses(){
    for (let i=1; i<=9; i++){
        let cross = document.createElement('img');
        cross.setAttribute('src', `./img/crosses/c${i}.png`);
        cross.setAttribute('class', 'c');
        cross.setAttribute('id', `c${i}`);

        let cell = document.getElementById(`cell${i}`);
        cell.append(cross);
    }
}
showCrosses();

function showZeroes(){
    for (let i=1; i<=9; i++){
        let zero = document.createElement('img');
        zero.setAttribute('src', `./img/zeroes/z${i}.png`);
        zero.setAttribute('class', 'z');
        zero.setAttribute('id', `z${i}`);
        let cell = document.getElementById(`cell${i}`);
        cell.append(zero);
    }
}
showZeroes();





// two functions that changes display of a cross or of a zero to 'block' 
function putCross(cell){
    console.log(`put cross ${cell}`)
    let newCross = document.getElementById(`c${cell}`);
    let zero =  document.getElementById(`z${cell}`);
    if (zero.style.display != 'block'){
    newCross.style.display = 'block';
    usersInputsCross.push(cell)
    allUsersImputs.push(cell)
    }
}


function putZero(cell){
    console.log(`put zero ${cell}`)
    let newZero = document.getElementById(`z${cell}`);
    let cross =  document.getElementById(`c${cell}`);
    if (cross.style.display != 'block'){
    newZero.style.display = 'block';
    usersInputsZero.push(cell)
    allUsersImputs.push(cell)
    console.log(usersInputsZero)
    answerCross(cell)
    }
}





function eventClickZero(){
    console.log('zeroes was choosed')
    for (let i=1; i<=9; i++){
        let cell = document.getElementById(`cell${i}`);
        cell.addEventListener("click", function(){putZero(i)});
    }
}



function firstChoiseZero(){
    let choiseZero = document.getElementById('gameZero');
    choiseZero.addEventListener('click', eventClickZero);
}
firstChoiseZero()


let usersInputsCross = [];
let usersInputsZero = [];
let allUsersImputs = []


function answerCross(lastChoise){
    console.log('answerCross');
    if (usersInputsZero.length ==1 && usersInputsZero.includes(5) ) {
        console.log('check done')
        putCross(3);
    }
    else if (usersInputsZero.length ==1 && usersInputsZero[0] !=5) {
        console.log('check done')
        putCross(5);
    }
    else if (allUsersImputs.includes(1)==false && (usersInputsZero.includes(2) && usersInputsZero.includes(3) || usersInputsZero.includes(4) && usersInputsZero.includes(7) || usersInputsZero.includes(5) && usersInputsZero.includes(9))){
        console.log('check done')
        putCross(1);
    }
    else if (allUsersImputs.includes(2)==false && (usersInputsZero.includes(1) && usersInputsZero.includes(3) || usersInputsZero.includes(5) && usersInputsZero.includes(8))){
        console.log('check done')
        putCross(2);
    }
    else if (allUsersImputs.includes(3)==false && (usersInputsZero.includes(1) && usersInputsZero.includes(2) || usersInputsZero.includes(6) && usersInputsZero.includes(9) || usersInputsZero.includes(5) && usersInputsZero.includes(7))){
        console.log('check done')
        putCross(3);
    }
    else if (allUsersImputs.includes(4)==false && (usersInputsZero.includes(1) && usersInputsZero.includes(7) || usersInputsZero.includes(5) && usersInputsZero.includes(6))){
        console.log('check done')
        putCross(4);
    }
    else if (allUsersImputs.includes(6)==false && (usersInputsZero.includes(4) && usersInputsZero.includes(5) || usersInputsZero.includes(3) && usersInputsZero.includes(9))){
        console.log('check done')
        putCross(6);
    }
    else if (allUsersImputs.includes(7)==false && (usersInputsZero.includes(1) && usersInputsZero.includes(4) || usersInputsZero.includes(3) && usersInputsZero.includes(5) || usersInputsZero.includes(8) && usersInputsZero.includes(9))){
        console.log('check done')
        putCross(7);
    }
    else if (allUsersImputs.includes(8)==false && (usersInputsZero.includes(2) && usersInputsZero.includes(5) || usersInputsZero.includes(7) && usersInputsZero.includes(9))){
        console.log('check done')
        putCross(8);
    }
    else if (allUsersImputs.includes(1)==false && ((usersInputsZero.includes(1) && usersInputsZero.includes(5) || usersInputsZero.includes(3) && usersInputsZero.includes(6) || usersInputsZero.includes(7) && usersInputsZero.includes(8)) || usersInputsCross.includes(3) && usersInputsCross.includes(6) || usersInputsCross.includes(1) && usersInputsCross.includes(5) || usersInputsCross.includes(7) && usersInputsCross.includes(8))){
        console.log('check done')
        putCross(9);
    }
    else{
        for (let i=1; i<=9; i++){
            if (allUsersImputs.includes(i)==false){
                putCross(i);
            }
        }
    }
}









// to functions that set an EventListeners with functions putCross or putZero to every cell of a board

// function crossChoise(){
//     for (let i=1; i<=9; i++){
//         let cell = document.getElementById(`cell${i}`);
//         cell.addEventListener("click", function(){
//             putCross(i)
//             return (i)
//         }); 
//     }
// }

// function zeroChoise(){
//     for (let i=1; i<=9; i++){
//         let cell1 = document.getElementById(`cell${i}`);
//         cell1.addEventListener("click", function(){putZero(i)});  
//     }
// }

// function firstChoiseCross(){
//     firstChoiseZero()
//     let choiseCross = document.getElementById('gameCross');
//     choiseCross.addEventListener('click', crossChoise);
    
// }