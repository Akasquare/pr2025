

function saveToDB(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed > 4){
        success();
    }else {
        failure();
    }
};

//callback hell

saveToDB("hello",()=>{
    console.log("success: your data was saved");
    saveToDB("world",()=>{
        console.log("success: your data was saved");
    },()=>{
        console.log("failure: week connection");
    });
},()=>{
        console.log("failure: week connection");
    }
);