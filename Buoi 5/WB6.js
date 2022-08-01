
// let x = 5
//     y = 10000
//     g = 5/100
//     z = x*y*(1+g)
//     p = x*y
// console.log(z)
// console.log(p) 

// let x = 5
//     y = 15000
//     p = 5 
//     z = x*y*p
// console.log(z)

// let x = 2
// if (x % 2 === 0) {
//     console.log("x is even");
// }

// if (true) {
//     console.log("true")
// }

// if ("") {
//     console.log("You will not see this line");
// }

// let a = 3
// if (a % 3 === 0) {
//     console.log("đúng cmnr");
// }

// let x = 4
// if (x/3 == 1) {
//     console.log("đúng vcl")
// }
// else if (x/4 === 1) {
//     console.log("Đúng 1 tí")
// }
// else {
//     console.log("Như cl")
// }

// let day;
// switch (new Date ().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     default:
//         day = "not weekend"
// }

// console.log(day)

// let sum=3
// for (let i = 3; i < 30; i++) {
//     sum += i
// }

// console.log(sum)

// let i = 0;
// for (; i < 99; i++) {
//     console.log(i)
// }

// for (let i = 0; i < 99;) {
//     console.log(i)
//     i++
// }

// let sum=0;
// let i=0;
// while (i < 99) {
//     sum += i;
//     i++;
// }
// console.log(sum)

// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         break;
//         console.log("stop fucking stop")
//     }       
//     console.log(i);
// }

// const cars = ["Merc", "audi", "BMW"]
// cars[1] = "vinfast"
// console.log(cars)

// const arr = [1,2,3,4,5,6,7,8,9]
// for (let i=0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j])
//     j++;
// }

// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const newarr = arr1.concat(arr2)
// console.log(newarr)

// const arr = [1,2,3,4,5,6]
// arr.splice(2,3,12)
// console.log(arr)

// const arr = [1,2,3,4,5,6]
// console.log(arr.slice(1,4))

// const car = {
//     brand: "Merc",
//     year: 2022,
//     color: "red"
// }
// // console.log(car.color)

// car.year = 2020
// console.log(car)

// const student = {
//     name: "Alice",
//     age: 20
// }

// delete student.name
// console.log(student)

// const x = {name: "Ngoc"}
// const y = {age: 30}
// const z = Object.assign(x, y)
// console.log(z)

// function sayHello() {
//     console.log("Địt")
//     console.log("Cụ")
//     console.log("Mày")
// }

// sayHello()

// function sayHello(name) {
//     console.log("Hello " + name + " Fuck you! Bietch");
// }
// sayHello("Hồng")

// function sum(x,y) {
//     console.log(x,y);
// }
// sum(1,2)

// function sum(a, b) {
//     return a + b
// }

// const x = sum(1,2)
// console.log(x)

// function toCelcius(fahrenheit) {
//     return (5/9)*(fahrenheit-32);
// }

// const Celcius= toCelcius(77)rê
// console.log(Celcius)

// function myFunction(p1, p2) {
//     return p1*p2;
// }

// let x = myFunction(4,6)
// // console.log(x)

// let x = Math.sqrt(2);
// console.log(x)

// const time = new Date().getHours();
// console.log(time)

// let greeting;
// if (time < 10) {
//     greeting = "Tối đi ngủ đi";
// }

// else {
//     greeting = "Dậy cmmd";
// }

// console.log(greeting)

// let voteable;
// let age = prompt("enter a number");

// if (isNaN(age)) {
//     voteable = "Input is not a number";
// }
// else {
//     voteable = age < 18 ? "too young" : "too old";
// }

// alert(voteable + " to vote");

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// let text = "";
// let i = 0;

// while (i<=10) {
//     text += "The number is " + i + "\n";
//     i++;
// }

// console.log(text)

// let day;
// switch (new Date().getDay()) {
//     case 5:
//         day = "Thursday";
// }

// console.log("Today is " + day)

// let text;
// let favDrink = prompt("What is ur fav drink ?");

// switch (favDrink) {
//     case "Coca-Cola": text = "Ngon vcl";
//     break;
//     case "Pepsi": text = "Như loz";
//     break;
//     case "Sprite": text ="Hell yeah";
//     break;
//     default: text = "Nói CL GÌ VẬY";
// }

// alert("Đồ uống " + text)


// function greet(name) {
//     return "Tên bạn là " + name;   
// }

// let x = prompt("Tên bạn là gì ?");
// let result = greet(x);
// alert(result)

// function add(a,b) {
//     return a + b;
// }

// let x = Number(prompt("điền số 1 vào ?"));
// let y = Number(prompt("điền số 2 vào"));;
// let result = add(x,y)

// alert(result)


// function countdown(fromnumber) {
//     console.log(fromnumber);
//     let nextnumber = fromnumber-1;
//     if (nextnumber > 0) {
//         countdown(nextnumber);
//     }
// }

// countdown(10)

// function sayHi(name) {
//     alert("Hi " + name);
// }

// function sayBye(name) {
//     alert("Bye " + name);
// }

// function say(name,fuck) {
//     alert("Fuck you");
//     fuck(name);
// }

// say("Ngoc",sayBye)

// const arr=[1,2,3,4,5,6];
// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let index in arr) {
//     console.log(arr[index]);
// }

// console.log("Con cặc");

// arr.forEach((item, index) => {
//     console.log(index+1, item);
// })

// const arr=[1,2,3,4,5,6,7]
// arr[0] = "A";
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = `${i+1} : ${arr[i]}`
// }

// console.log(arr)


// const age = [3,4,5,6,10,18,20,25,29];
// console.log(age);

// console.log(age.find((age) => {
//     return age > 18;
// }))

// while (true) {
//     let firstNumber;
//     let LastNumber;
//     let N = prompt("Nhập số nào ?");
//     if (isNaN(N)) {
//         continue;
//     } else if (N < 0) {
//         alert("Điền số lớn hơn 0 nhé");
//         continue;
//     } else if (N > 100) {
//         alert ("Điền số nhỏ hơn 100 nhé");
//         continue;
//     }
//     for (let index = 0; index < N; index++) {
//         if (index === 0) {
//             firstNumber = index;
//         }
//         if (index === N-1) {
//             LastNumber = index;
//         }
//     }
//     console.log(`Số nhập vào là ${N} số đầu tiên là ${firstNumber} số cuối là ${LastNumber}`);
//     break;
// }
// let firstNumber;
// let LastNumber;
// let stringnumber = "";
// while(true) {
//     let N = prompt("Nhập số vào");
//     if (isNaN(N)) {
//         continue;
//     } else if (N < 0) {
//         alert("Điền số lớn hơn 0 nhé");
//         continue;
//     } else if (N > 10) {
//         alert ("Điền số nhỏ hơn 100 nhé");
//         continue;
//     }
//     stringnumber += N.toString();
//     if(stringnumber.length < 5) {
//         continue;
//     }
//     console.log(stringnumber);
//     for (let index=0; index < stringnumber.length;index++) {
//         let char =stringnumber[index];
//         if(index === 0) {
//             firstNumber = char;
//         }
//         if(index === stringnumber.length-2) {
//             LastNumber = char;
//         }
//     }
//     console.log(`Số nhập vào là ${stringnumber} số đầu tiên là ${firstNumber} số gần cuối là ${LastNumber}`);
//     break;
// }

// let string = prompt("Nhập chuỗi kí tự")
// let reversestring = string;
// for (let i=string.length-1; i >= 0; i--) {
//     const element = string[i];
//     reversestring += element;
// }

// console.log(reversestring)

// while(true) {
//     let number = prompt("Nhập số vào đi");
//     if(isNaN(number)) {
//         continue;
//     } else if (number < 2) {
//         alert("Số phải lớn hơn 2");
//         continue;
//     } else if (number > 100) {
//         alert("Số phải nhỏ hơn 100");
//         continue;
//     }
//     for (let i=2; i<number; i++) {
//         let integer = true;
//         for (let index=2; index <= Math.sqrt(i);index++) {
//             if(i % index === 0) {
//                 integer = false;
//                 break;
//             }
//         }
//         if (integer) {
//          console.log(`${i} là số nguyên tố`);    
//         }          
//     }
//     break;
// }

// let char = prompt("Nhập chữ bạn muốn tìm trong câu `Cai dit con me nha may day`");
// let count = 0;
// let string = "Cai dit con me nha may day";
// for (let i=0; i < string.length; i++) {
//     const element = string[i];
//     if (element === char) {
//         count++;
//     }
// }
// console.log(count)

let N= [];

for (let i = 0; i < 5; i++) {
    let N = prompt("Nhập vào 5 phần tử");
    
}
console.log(`Số lớn nhất cần phải tìm là ${max}`)

