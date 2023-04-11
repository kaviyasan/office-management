const mongoose=require("mongoose")
const dbURL=process.env.mongoUrl

mongoose.connect(dbURL,{},
    (err)=>{
        if(err){
            console.log("DB is not connected");
            // console.log(err);
        }
        else{
            console.log("DB is connect");
        }
    })