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

async function Data() {
let again = new Promise(function(resolve){
        setTimeout(()=>{
            resolve("Helloooooooo")
        }, 1500);
    })

 let werg = await again;
 console.log(werg)
}
Data();