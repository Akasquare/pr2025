
let bdy = document.querySelector("body");
let head = document.querySelector("h1");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
// let dlt = document.querySelector(".delete");
let ul = document.querySelector("ul");
let Alert = document.createElement("h4");

// let del = `<button class="delete">Delete</button>`;
function CreateAndDelete (event){
    if(inp.value !="" ){
    let item = document.createElement("li");
    item.innerText= inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText= "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value= "";
    Alert.innerText= "";

    }else{
        Alert.innerText= "please enter some task";
        Alert.style.color="red";
        bdy.appendChild(Alert);
    }

}


btn.addEventListener("click", CreateAndDelete );

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
    let itemList= event.target.parentElement;
    itemList.remove();
    }
});

inp.addEventListener("keydown",function(event){
    if(event.code=="Enter"){
     CreateAndDelete();
    }
});








// d.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerHTML= inp.value +"&nbsp&nbsp" +del;
//     ul.appendChild(item);
//     inp.value= "";
// });







