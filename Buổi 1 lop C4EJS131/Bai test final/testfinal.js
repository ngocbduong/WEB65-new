// // Bài 1:


// while(true) {
//     let a = prompt("Nhập số a vào đi");
//     if(isNaN(a)) {
//         continue;
//         } else if (a < 2) {
//             alert("Số phải lớn hơn 2");
//             continue;
//         } else if (a >= 100) {
//             alert("Số phải nhỏ hơn 100");
//             continue;
//         } 

//     let b = prompt("Nhập số b vào đi");
//     if(isNaN(b)) {
//         continue;
//         } else if (b < 2) {
//             alert("Số phải lớn hơn 2");
//             continue;
//         } else if (b >= 100) {
//             alert("Số phải nhỏ hơn 100");
//             continue;
//         }        
   
//     for (let i = a ; i < b; i++) {
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

// // Bài 2:

// function numberOneTriangle() {
//     let a = prompt('Nhập số nguyên từ 1 đến 10');
//     if (0 < a && a < 11) {
//         for (let i = 1; i <= a; i++) {
//             for (let j = 1; j <= i; j++) {
//                 document.write('*');
//             }
//             document.write('<br/>');
//         };
//     } else {
//         alert('Nhập lại');
//     }

// }

// numberOneTriangle();
