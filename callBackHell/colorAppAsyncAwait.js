let h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            h1.style.color = color;
             resolve("color changed")
        }, delay)
})}
    
//async await
async function demo() {
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("purple", 1000);
    await changeColor("pink", 1000);   
}

demo();

// changeColor("red", 1000)
// .then((result)=>{
//     console.log("success")
//     console.log(result)
//    return changeColor("yellow",1000)
// })
// .then((result)=>{
//     console.log("success")
//     console.log(result)
//    return changeColor("green",1000)
// })
// .then((result)=>{
//     console.log("success")
//     console.log(result)
//    return changeColor("blue",1000)
// })
// .catch(
//     console.log("reject")
// )







// changeColor("red", 1000 ,()=>{
//     changeColor("orange", 1000 ,()=>{
//         changeColor("green", 1000 ,()=>{
//             changeColor("yellow", 1000 ,()=>{
//                 changeColor("blue", 1000 ,()=>{
//                     changeColor("pink", 1000 );
//                 })
//             } );
//         })
//     });
// })