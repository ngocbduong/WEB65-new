// Object basic
let emailkey = 'email';

let myinfo = {
    name: 'ngoc',
    age: 18,
    address: 'Hanoi',
    [emailkey]: 'ngocduong@tiw.vn'  
}

console.log(myinfo)

// Object constructor:

function User(first, last, avatar) {
    this.first = first;
    this.last = last;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.first} ${this.last}`
    }
}



let author = new User('Sơn', 'Đặng', 'Avatar');
let user = new User('Vũ', 'Cặc', 'Avatar');

console.log(author.getName());
console.log(user.getName());

// Date:

let date = new Date();

console.log(date);

// dùng vòng lặp for với array:

let array = ['a','b','c','d','e'];
let arraylength = array.length;
for (let i = 0; i < arraylength; i++) {
    console.log(array[i]);
}

// dùng vòng lặp for in:

let array2 = {
    name: 'Ngọc',
    age: 18,
    Adress: 'Hanoi'
};
for (let key in array2 ) {
    console.log(array2[key]);
}

//TH for in với array:

let array3 = ['a','b','c','d','e'];

for (let key2 in array3) {
    console.log(array3[key2]);
}

// Test for in in complex excercise:
var teacher = {
    name: 'Hieu',
    age: 18,
    appearance: {
        haircolor: 'black',
        skincolor: 'yellow',
        height: 1700,
        weight: 68
    }
}


function getkeys(object) {
    for (let key in object) {
        if (typeof object[key] !== 'object') {
            console.log(key);
        } else {
            getkeys(object[key]);
        }
    }
}

getkeys(teacher);

// Practice DOM:

let listnodes = document.querySelector('.language-menu');
console.log(listnodes.getElementsByTagName('a'));


