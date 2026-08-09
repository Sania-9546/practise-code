// console.log(Math.PI);
// console.log(Math.max(34,76,45,9,2));
// console.log(Math.min(34,76,45,9,2));
// console.log(Math.round(3.5));
// console.log(Math.floor(3.5));
// console.log(Math.ceil(3.5));
// console.log(Math.abs(5));
// console.log(Math.abs(-5));
// console.log(Math.random());
// console.log(Math.abs(-5));
// console.log(Math.abs(-5));
// // let element=document.querySelector('.sdiv');
// // let newElement=document.createElement('span');
// // newElement.textContent="hello sania nausheen,how are you";
// // element.insertAdjacentElement('beforeEnd',newElement);
// // let parent=document.querySelector('.sdiv');
// // let child=document.querySelector('.fclass');
// // parent.removeChild(child);


// let anchorElement=document.getElementById("anchorid");
// anchorElement.addEventListener("click",function(event){
//   event.preventDefault();
//   anchorElement.textContent='when click it does not load'
// })



// let firstpromise=new Promise((resolve,reject)=>{
//   console.log("promise is pending");
//   // reject(new Error("this is an error"));
//   resolve("promise is resolved");
// });



// function myName(){
//   console.log("my name is sania nausheen");
// }
// setTimeout(myName,10000);

//  let firstpromise=new Promise((resolve,reject)=>{
//   setTimeout(function myName(){
//    console.log("my name is sania nausheen");
//   },15000);
//   resolve(1);
//  });



// let firstpromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Promise resolved successfully");
//     } else {
//         reject(new Error("Promise rejected"));
//     }
// });
// firstpromise
//     .then((message) => {
//         console.log("then ka message is: " + message);
//     })
//     .catch((error) => {
//         console.error("catch ka error is: " + error.message);
//     });


// async function myFunction() {
//     setTimeout(function(){
//         console.log("my name is sania nausheen");
// },10000);
// }


async function myFunction(){
    let response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
}
myFunction();
