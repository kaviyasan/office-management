const mongoose=require('mongoose')


const loginschema=mongoose.Schema({
    employeeid:String,
    password:String
})

const model=mongoose.model('login',loginschema)

const save=async(data)=>{
    try{
    const user=new model(data)
    const save=await user.save();
    return save
    }
    catch(err){
        return false;
    }
}

const get=async(data)=>{
    let a;
     a=await model.aggregate([
    {$match:
        {employeeid:data}
    }
    ])
    return a;
}

module.exports={save,get}