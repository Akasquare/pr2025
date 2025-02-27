const express = require("express");
const app = express();
// console.dir(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app Listening on the port ${ port}`)
});

// app.use((req, res)=> {
//     console.log("request received");
//     res.send("this is basic response")
// })

app.get("/", (req , res )=>{
    res.send("Hello i am root");
});
app.get("/:username/:id", (req , res )=>{ 
    let { username }= req.params;
    console.log(req.params)
    res.send(`this page belongs to ${username}`)

});


























// app.get("/search", (req , res )=>{
//     res.send("you contacted search path");
// });
// app.get("/query", (req , res )=>{
//     res.send("you contacted query path");
// });
// app.get("*", (req , res )=>{
//     res.send("path does not exist");
// });

// app.post("/", (req,res)=>{
//     res.send("you sent a post request");
// })