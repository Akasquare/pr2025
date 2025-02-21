let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    console.log("Button clicked")
}
btn.onmouseenter= function(){
    console.log("activated")
}