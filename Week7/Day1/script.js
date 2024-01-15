//task from google
let b=3;
let d=b;
let u=b;
const sum =  ++d * d*b * b++ + --d + b-- + d*b + u 
console.log(sum) // 163

// 4 * 4*3 * 3 + 3 + 4 + 3*3 + 3


// Objects
 let obj = {}
// = 
//  let obj = new Object();

obj.name = 'john';
obj['email'] = 'juhn666@gmail.com';


// dynamic key
let a = 'name'
let objec = {
    [a]: 'Marry'
}
console.log(objec) //{ name: 'Marry' }
console.log(objec.name)
console.log(objec[a])



//looping

let objj = {
    name: 'dan',
    age: 16
}

for (x in objj) {
    console.log (x, objj[x]);
}

//keys
const keys = Object.keys(objj);
console.log(keys) // array

keys.forEach (key => {
    console.log(key)
})

//values
const values = Object.values(objj);
console.log(values)

//entries
const entries = Object.entries(objj);
console.log(entries) // array [ [ 'name', 'dan' ], [ 'age', 16 ] ]
for (x of entries){
    console.log (x[0], x[1])
}

//from array oa arrays to obj
let something = [
    ['s', '100'],
    ['d', '200']
]
let objFromArray = Object.fromEntries(something)
console.log(objFromArray)



//link by referens 
let obj1 = {
    name: 'dan',
    age: 16,
    professions: {
        fgb: 'kljfeb'
    }
}
let obj2 = obj1 //referense

let obj3 = {...obj1} //value


//deep clonning if there are inner objects 
// via JSON
let jsonObj = JSON.stringify(obj1)
console.log(jsonObj) //string

let newObj = JSON.parse(jsonObj)
console.log(newObj)



//Merging

let objA = {
    name: 'dan',
    age: 16
}

let objB = {
    height: 173,
    age: 18
}

objA.height = objB.height
console.log(objA)

let objC = {...objA, ...objB}
console.log(objC) // we have 2 names, copied just the last one



//destructuring
const objD = {
    name: 'Dan',
    age: 16
}
// const name = objD.name;
// const age = objD['age'];
// ==
const {name, age} = objD;
console.log(name)


//spreading
let objE = {...objD, city: 'TLV', last_name: 'Cohen', age: 17}; // age overwrittet
console.log (objE)


//nested objecr destructuring
let nestedObj = {
    aa: 100,
    bb: 200,
    cc: {
        c1: 300,
        c2: 400
    }
}

const {bb, cc:{c2, c1}, aa} = nestedObj // order isnt important

console.log (c1, c2) //300 400



// Exersice //////////////////////////////////////////////
// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys
let task = {
    user1: { age: 44, name: 'picard', },
    user2: { age: 12, name: 'sisko', },
    user3: { age: 109, name: 'janeway',},
  }

// 1 path
// let key = Object.keys(task)
// let filtred = key.filter((key)=>task[key].age>30)
// const res = filtred.map(id =>( {id:id, ...task[id]}))
 //= 
//2 pasth
let res = Object.keys(task)
    .filter((key)=>task[key].age>30)
    .map(id =>( {id:id, ...task[id]}));

console.log(res);
// [
//     { id: 'user1', age: 44, name: 'picard' },
//     { id: 'user3', age: 109, name: 'janeway' }
//   ]


// Method

let brandNewObj = {
    name: 'John',
    getName: function () {
        return this.name;
    }
}

console.log(brandNewObj.getName());



// Class ////////////
class Animal {
    constructor(type){
        this.type = type;
    }
    makeSound() {
        return `${this.type} makes a sound`; //Method
    }
}

const animalA = new Animal('dog');
console.log(animalA.makeSound())

// Sub Class

class Dog extends Animal {
    constructor(name) {
        super('Dog')
        this.dogName = name
    }
    
    // getters
    bark(){
        return `${this.type} ${this.dogName} barks`; //Method
    }

    // makeSound(){
        // will owerwright parent's class method
    // }

    getName () {
        return this.dogName
    }

    // setters
    setName (val) {
        this.dogName = val
    }

}

const newDog = new Dog('Arni');
console.log(newDog.bark())
console.log(newDog.makeSound())


newDog.setName('Lusha') // setter
console.log(newDog. getName()) // getter

