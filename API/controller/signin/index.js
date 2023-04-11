const service=require("./service")

// const saveuser=async(req,res)=>{
    // var employeeid=req.body.employeeid;
    // var password=req.body.password;
//     let val=await service.save(req.body)
//     res.send({code:200,"message":"login success"})
// }

const getuser=async(req,res)=>{
     var employeeid=req.body.employeeid;
    var password=req.body.password;
    let val=await service.get(employeeid)

    if(val.length==0){
        res.send({code:400,"message":"employeeid is not match"})
    }
    else{
        if(password==val[0].password){
            res.send({code:200,"message":"login success"})
        }
        else{
            res.send({code:400,"message":"password is not match"})
        }
    }
    // res.send({code:200,"data":val})
}

module.exports={getuser}