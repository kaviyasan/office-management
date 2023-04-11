const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    Email: String,
    Password: String
})

const model = mongoose.model("admin", adminSchema);

const adminProfile = async (data) => {
    try {
        const adimindata = new model(data)
        const savedata = await adimindata.save()

        return savedata
    } catch (error) {
        return false
    }
}


const loginforAdmin=async(data)=>{
      let login=await model.aggregate([
        {$match:{"Email":data}}
      ])
// console.log(login);
      return login
}


module.exports={
    adminProfile,
    loginforAdmin
}