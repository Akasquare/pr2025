let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let user = document.querySelector("#user").value;
    let pass= document.querySelector("#pass").value;
    console.log(user);
    console.log(pass);
})