let word = 'hello';
let split = word.split('');
// let join = split.join(`\n`);
// console.log(join)
// document.getElementById('here').textContent = join

split.forEach((char) => {

    document.getElementById('here').append(document.createTextNode(char), document.createElement('br'))
})