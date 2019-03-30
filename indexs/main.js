console.log('Heollo Man');
console.error('This is error');
console.warn('This is warning');
//alert('This is alert')

//variable: var, let, const
let age = 30;
age = 31;
console.log("age: ", age);
console.log("age: " + 30);
console.log(30 + "cm. ");

age = '45';
console.log(age);
console.log(30 + '40');
let b = 1;
b++;
console.log(b);

const name = 'john';
const height = 178;
const weight = 68.5;
const isCool = true;
const x = null;
const y = undefined;
console.log(typeof y);

//String
console.log('My name is ' + name);
console.log(`My name is ${name}`); //String literal
const hello = `My name is again also ${name}`;
console.log(hello.length); //ความยาว
console.log(hello.substring(3, 10).toUpperCase());
console.log(hello.split(' '));

//Array
const num = new Array(1, 2, 3, 4, 5, 6);
console.log(num);
const fruits = ['apples', "orange", 10, true, 14.5, [1, 2, 3]];
console.log(fruits[5]);
fruits.push('crazy');
console.log(fruits);
fruits[fruits.length] = 'end';
fruits.unshift('strat');
console.log(fruits);
fruits.pop(); fruits.pop();
console.log(fruits);

console.log(Array.isArray(hello));
console.log(Array.isArray(fruits));

console.log(fruits.indexOf('a'));

//Object literals
const person = {
    fname: 'lung',
    lname: 'tu',
    age: 40,
    hobbies: ['music', 'movie', 'sport'],
    address: {
        street: '239 Huaykaew rd.',
        city: 'Chiang Mai',
        country: 'Thailand'
    }
}
console.log(person);
console.log(`${person.fname} (${person.age})`);
console.log('A hobby: ' + person.hobbies[1]);
console.log('Street: ' + person.address.street);

const { fname, lname } = person;
console.log(fname + ' ' + lname);
const { address: { city } } = person;
console.log(`${fname} ${lname} (${city})`);

person.email = 'gmail_lungtu@gmail.com';
console.log(person);

//Array of objects
const todos = [
    {
        id: 1,
        text: 'Dental Appointment',
        isComplete: true
    },
    {
        id: 2,
        text: 'Shopping for food',
        isComplete: false
    },
    {
        id: 3,
        text: 'Finish web deverlopment homework',
        isComplete: true
    }
]
console.log(todos);

//JSON format
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// Loop
let i = 10;
let str = '';
while (i > 0) {
    str += `${i} `;
    i--;
}
console.log(str);

for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i].text}`);
}

for (let todo of todos) {
    console.log(todo.id + ' - ' + todo.text);
}

//Hight-order function
todos.forEach((todo, index) => {
    console.log(`${index + 1}: ${todo.text}`);
})


const todoText = todos.map(todo => todo.text)
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
    return todo.isComplete === true;
})
console.log(todoCompleted);

let abc = 40;
console.log(abc === '40');
console.log(abc == '40');

let b1;
const c1 = (b1 === undefined) ? 0 : b1;
console.log(c1);

function addNums(num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(addNums(5.10, 50));

//Arrow function
const addnums2 = (num1, num2) => num1 + num2;
console.log(addnums2(10, 100));

//OOP
function Person(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    //this.dob = dob;
    this.dob = (dob == undefined) ? new Date() : new Date(dob);

    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }

    this.getFullName = function () {
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person('John', 'Doe', '5-Dec-1990');
console.log(p1);
console.log(p1.getFullName() + ' ' + p1.getBirthYear());

class PersonC {
    constructor(firstname, lashname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.dob = (dob == undefined) ? new Date() : new Date(dob);
    }

    getBirthYear = () => this.dob.getFullYear();

    getFullName = function () {
        return `${this.fname} ${this.lname}`;
    }
}

const p2 = new PersonC('Jane', 'Doe', '15-Aug-2006');
console.log(p2);

//DOM = Document Object Model
// console.log(window.alert('alert'));
console.log(window.document);
const form = document.getElementById('my-form');
console.log(form);
const container = document.querySelector('h1');
console.log(container);
container.innerHTML = 'Dome potikanond';


//Play with form
const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myform.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value + ' '+emailInput.value);// ดึงค่าจาก textbox

    if (nameInput.value === '' || emailInput === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        
    } else {

        const li = document.createElement('li');
        const text = document.createTextNode(`${nameInput.value}:${emailInput.value}`);
        li.appendChild(text);
        //console.log(li);

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}