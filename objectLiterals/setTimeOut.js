

const id=setInterval(()=>{console.log("hii..")},2000);
console.log(id)

setTimeout(()=>{
    clearInterval(id);
    console.log("cleared successfully")
},9000);