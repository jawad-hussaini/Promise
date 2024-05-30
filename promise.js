async function DisplayData() {
    let myProfile = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("Hello")
        }, 2000)
    });
    let fullFilled = await myProfile;
    console.log(fullFilled)
}
DisplayData()