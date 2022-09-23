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


// practice F8 65 du lieu so:

function checkBoolean(value) {
    return Number.isInteger(value);
}

console.log(checkBoolean(NaN));

// Practice array 

function getFirstElement(array) {
    var firstElement = array.shift();
    var array = array.unshift(firstElement);
    return firstElement;
    
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// Check sử dụng object constructor và object prototype:

// Làm bài tại đây
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'

// Hàm year:
var date2 = Date();

function getNextYear() {
    return date.getFullYear() + 1;
}

console.log(getNextYear());

// Check bài:

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
    function getMostFavoriteSport(array) {
        var sportlist = array.filter(function(sport, index) {
            return sport.like > 5;
        });
        console.log(sportlist);
    }
   
getMostFavoriteSport(sports);

