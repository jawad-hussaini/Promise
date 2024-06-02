// can't create arrow function, why?
//how to use .then with function?



// async function DisplayData() {
//     let myProfile = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve("Hello")
//         }, 2000)
//     });
//     let fullFilled = await myProfile;
//     console.log(fullFilled)
// }
// DisplayData();

// async function Data() {
// let again = new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve("Helloooooooo")
//         }, 1500);
//     })

//  let werg = await again;
//  console.log(werg)
// }
// Data();

// function pro(){
//     let promised = (function(resolve, reject){
//         setTimeout(()=>{
//             if(resolve){
//             console.log("You are on time");
//             }else{
//                 console.log(reject) 
//             }
//         },2200)
//     });
//     let promiseDone = promised;
//     console.log(promiseDone(promised));
// };
// pro();


// // function fetching(){
//     let Data = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Data start to Fecth");
//             resolve()
//         },2000);
//     });
// // };
// Data.then(function(){
//     console.log("Data has fetched")
// });

// const obj = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve({username: "Malik", gmail: "malik@123.com"})
//     },3000)
// })

// obj.then(function(resolved){
//     console.log(resolved)
// })

// Same condition like as writen in above syntax

async function object() {
    const obj = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve({username: "Malik", gmail: "malik@123.com"})
        },3000)
    })
    
    // obj.then(function(resolved){
    //     console.log(resolved)
    // })
    let resolving = await obj;
    console.log(resolving)
};
object()