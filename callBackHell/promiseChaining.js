


function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed >4){
            resolve("success: data was saved");
        }else{
            reject("failure: week connectiion");
        }
    });

};

//promise chaining 

saveToDB("hello world")
.then((result) => {
    console.log("promise was resolved");
    console.log(result);
    return saveToDB("hii budy");
})
.then((result) => {
    console.log("promise was resolved");
    console.log(result);
    return saveToDB("hello budy");
}).then((result) => {
    console.log("promise was resolved");
    console.log(result);
})
.catch((error)=>{
    console.log(("promise was rejected"))
    console.log(error)
});