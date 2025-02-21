 
let btn = document.querySelector("button");
btn.addEventListener("click",getRandomColor
);

function getRandomColor(){
    let red= Math.floor(Math.random()*256);

    let green= Math.floor(Math.random()*256);

    let blue= Math.floor(Math.random()*256);
    let h3 = document.querySelector("h3").innerText= `rgb(${red},${green},${blue})`;

    let div = document.querySelector("div");
    div.style.backgroundColor= h3; 
    return h3;
    
}

btn.addEventListener("click",function(){
    console.log(this.innerText);
    let color = getRandomColor();
    this.style.backgroundColor= color;

}
)



