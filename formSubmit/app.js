let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    // let user = document.querySelector("#user").value;
    let user = this.elements[0].value;
    // let pass= document.querySelector("#pass").value;
    let pass = this.elements[1].value;
    console.log(user);
    console.log(pass);
});
let inp = document.querySelector("#user");
let p = document.querySelector("p");
inp.addEventListener("input", function(){
        p.innerText= inp.value; 
        console.log(inp.value)
    }
)
