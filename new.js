// //basic commands
// console.log("hello world");
// // alert("hi");
// document.write("hello niggas");
// console.warn("haloo");
// var und;
// console.log(und);

// //variables
// var string1 = "this is string";
// var marks = {
//     rohit: 40,
//     harshita: 20
// }
// console.log(marks);

// //array
// var arr = [1, 2, "rohit", 4]
// console.log(arr);

// var age = 15;
// if (age >= 18) {
//     console.log("wow");
// }
// else {
//     console.log("not wow");
// }

// var a = [1, 3, 5, 7, 9]
// for (var i = 0; i < a.length + 1; i++) {
//     console.log(a[i]);
// }

// a.forEach(function (element) {
//     console.log(element)
// });

// let j = 10;
// while (j < a.length) {
//     console.log(a[j]);
//     j++;
// }

// do {
//     console.log(a[j]);
//     j++;
// } while (j < a.length)

// let myarr = [28, "rohit", "nigga"];
// console.log(myarr.length);
// myarr.shift(28);
// console.log(myarr);

// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());

// let ab = document.getElementById("click");
// console.log(ab);

// let abclass = document.getElementsByClassName("container");
// console.log(abclass);

// abclass[0].classList.add("text-success");

tn = document.getElementsByTagName("div");
console.log(tn);    
createdelement= document.createElement("b");
createdelement.innerText = "this is a new para";
tn[0].appendChild(createdelement);

//query selector
a =document.querySelectorAll(".container");
console.log(a);

//events
function clicked(){
    console.log("button was clicked");
}
window.onload = function(){
    console.log("window was loaded")
}

firstContainer.addEventListener('click',function{
    console.log("clickeddddddddd")
})