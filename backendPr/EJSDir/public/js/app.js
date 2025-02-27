const buttonss = document.querySelectorAll("button");

for(btn of buttonss){
    btn.addEventListener("click", ()=>{
        console.log("button was clicked");
    })
}
