
const express = require("express");
const bodyParse = require("body-parser");

const app = express();

//parse request of content-type: application/json
app.use(bodyParse.json());

//parse request of content-type: application/x-www-form-urlencode
app.use(bodyParse.urlencoded({extended:true}));

//simple route
app.get("/", (req, res)=>{
    res.json({message:"Welcome to JD47 Application"});
});

require("./app/routes/customer.routes.js")(app);

//set port, listen for requests
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});