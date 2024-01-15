let arr = [
    {id:1, name:'aaa', username: undefined},
    {id:2, name:'bbb', username: 'bbb111', c:function(){}},
    {id:3, name:'ccc', username: 'ccc111'},
];

console.log(arr)

let arrJson = JSON.stringify(arr);// => string. Ignore undefined, functions ets, only data

console.log(arrJson)

let arrFromJSON = JSON.parse(arrJson);

console.log(arrFromJSON)

//XML file previously used before JSON
//like( https://zivuch.github.io/emails.xml)

