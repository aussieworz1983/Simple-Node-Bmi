const bodyParser = require('body-parser');
const express = require('express' );
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
//"/" is the root path 
app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
    console.log(req);
});
app.post("/",function(req,res){
  
var weight =  Number(req.body.weight);
var height = Number(req.body.height);

console.log(req.body);

var result = weight / height * height;

res.send("Your bmi calculation is "+result);
});
app.listen(port, function(){
console.log("listening on local host port 3000");

});

