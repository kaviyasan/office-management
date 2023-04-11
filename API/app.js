const app=require("express")();
const bodyParser=require("body-parser")
const cors=require("cors");
const { config } = require("dotenv");
const il=require("./controller/Employees/service")


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());

app.use(function(req,res,next){
   // res.removeHeader('X-Powered-By');
   // res.setHeader('Content-Type', 'application/json');
   res.header("Access-Control-Allow-Origin","*");
   res.header("Access-Control-Allow-Methods",'GET,POST,OPTIONS,PUT,PATCH,DELETE');
   res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept,authentication-token,application/json,charset=utf-8");
   // res.setHeader('Access-Control-Allow-Credentials', true);
   // res.setHeader('Content-Type', 'text/html');
   next();
})
require("dotenv").config()
require("./routes/route")(app)
require("./config/mongoose")
// const mon=il.file()
// console.log(mon);


const PORT=5000



  
app.listen(PORT,()=>{
   console.log(`${PORT} is running....`);
})