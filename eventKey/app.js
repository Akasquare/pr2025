let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){

    console.log("code =", event.code);
    if(event.code == "ArrowUp") { //keyU if U pressed
        console.log("charactor moves forword");
    }else if(event.code == "ArrowDown") {
        console.log("charactor moves backword");
    }else if(event.code == "ArrowLeft") {
        console.log("charactor moves left ");
    }else if(event.code == "ArrowRight") {
        console.log("charactor moves right");
    }
})