// const h1 = document.querySelectorAll('h1');
// console.log(h1);

// // //get by id
// const hID = document.getElementById('header');
// console.log(hID);

// // //get by class
// const h1Class = document.getElementsByClassName('first');
// console.log(h1Class);


// For each of the questions, find 2 WAYS to access :

// // 1. The div node
// const div = document.querySelector('div');
// //console.log(div);
// // 2. The ul nodes, and render all of it's children one by one
// const ul1 = document.querySelectorAll('ul');
// //console.log(ul1);
// for (let ul of ul1) {
//     console.log(ul.children);
//     for (let li of ul.cildren) {
//         console.log(li);
//     }
// }

// // 3. The first li of each ul
// const allUl = document.querySelectorAll('ul');
// for (let i in allUl){
//     console.log(allUl[i])
//     for (let k in allUl.i){
//         console.log(k);
//     }
// }


// //Atributes
// const div1 = document.querySelector('div');
// console.log(div1.hasAttribute('id'))

// div1.setAttribute('class','red')

// Image.setAttribute('src', 'http...')
// Image.setAttribute('style', 'width:100px')

// div1.removeAttribute('...')




// href
const a = document.querySelector('a');
href = a.getAttribute('href')
console.log(href)
// hreflang
hreflang = a.getAttribute('hreflang')
console.log(hreflang)
// rel
rel = a.getAttribute('rel')
console.log(rel)
// target
target = a.getAttribute('target')
console.log(target)
// type
type = a.getAttribute('type')
console.log(type)

// a.style.backgroundColor = 'red';
// a.style.color = 'wite'

// a.className = 'newclass' //replace all classes to the new
// a.classList.add('newclass') // add new classs
// a.classList.add('newclass', 'anotherclass') // add new classes
// a.classList.remove('newclass') // remove new classs
// console.log(a.classList.contains('newclass'))

// //toggle - later

a.style.textDecoration = 'none';
a.style.color = 'red'
a.style.backgroundColor = 'pink'
a.style.padding = '10px'
a.style.borderRadius = '15px'
a.classList.add('border1', 'border2')
