// const arr = [100, 200, 300];

// arr[5]=500;
// console.log(arr);

// fruits.push("apel");
// fruits.push("pisang");
// fruits[4]="buah naga";

// console.log(fruits);

// const fruits =new Set();
// fruits.add("apel");
// fruits.add("pisang");
// fruits.add("apel");
// fruits.delete("apel");
// console.log(fruits.has("apel"));
// console.log(fruits);

// let ibukota = new Map();

// ibukota.set("Indonesia","Jakarta");
// ibukota.set("Jepang","Tokyo");

// console.log(ibukota.get("Indonesia"));

// const bmw = {
//     color: "red",
//     sunroof: false,
//     horn: () => console.log("tinn"),
//     steering: () => console.log("brmmm")
// }

// const tesla = {
//     color: "blue",
//     sunroof: true,
//     horn: () => console.log("tinn"),
//     steering: () => console.log("brmmm")
// }
// console.log(tesla.sunroof);

// let age=9;
// if (age >= 18) {
//     console.log("you can sign up");
// } else  if (age >=10){ 
//     console.log("you can sign up");
// } else {
//     console.log("Kamu masih terlalu kecil");
// }
// console.log("Selamat Datang");

// let day="sEnin";

// switch(day.toUpperCase){
//     case "SENIN":
//         console.log("Puasa Sunnah hari Senin");
//         break; 
//     case "Selasa":
//         console.log("Boleh ga puasa sunnah");
//         break; 
   
//     // case 3:
//     //     console.log("Rabu");
//     //     break; 
//     // case 4:
//     //     console.log("Kamis");
//     //     break; 
//     // case 5:
//     //     console.log("Jum'at");
//     //     break; 
//     // case 6:
//     //     console.log("Sabtu");
//     //     break; 
//     // case 7:
//     //     console.log("Minggu");
//     //     break; 
//     default:
//         console.log("Tidak ada");
//         break; 

// }

// let age=15;

// let message = age>=16 ? "You can drive":"You cannot dive";
// console.log(message);
// let users = [];

// users = '';

// if (users) {
//     console.log("user ada");
// } else {
//     console.log("user ga da");
// }

// let fruits = ["apple", "orange", "melon", "strawberry", "grape"];

// // for (let step = 0; step < fruits.length; step++) {
// //     console.log('My fruit is ' + fruits[step]);
// // }

// for (const fruit of fruits) {
//     console.log('My fruit is ' + fruit);
// }

for (let step=1; step<=100; step++) {
    if (step % 3 === 0 && step % 5 === 0) {
        console.log("fizzbuzz");
    } else if (step % 5 === 0) {
    console.log("buzz");
    } else if (step % 3 === 0)
    console.log("fizz");
    else  {
    console.log(step);
    }
    }
