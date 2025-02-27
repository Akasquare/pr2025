const express = require("express");
const app = express();
const port = 3000;
const path = require("path") //for use out side of path

// app.use(express.static("public"));// used for adding css file from another file
app.use(express.static(path.join(__dirname,"public/css")));// used for adding css file from another file
app.use(express.static(path.join(__dirname,"public/js")));// used for adding css file from another file
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get ("/", (req , res)=>{
    res.render("home.ejs")
})
// app.get ("/ig/:username", (req , res)=>{
//     let {username}= req.params;
//     let followers = ["adam", "bob","charli","abc"];
//     console.log(username);
//     res.render("instagram.ejs", {username, followers})
// })
app.get ("/ig/:username", (req , res)=>{
    let {username}= req.params;
    const instaData = require("./data.json");
    data = instaData[username];
    console.log( data);
    if(data){
        res.render("instagram2.ejs", {data})
    }else{
    res.render("error.ejs")
    }
})



app.get ("/dice", (req , res)=>{
    let num = Math.floor(Math.random()*6) +1;
    res.render("dice.ejs", {diceVal : num});
})
app.listen(port, ()=>{ 
    console.log(`listening on port ${port}`);
});