const mongoose = require("mongoose")
const xlsx = require('xlsx');

const EmployeeSchema = mongoose.Schema({
    id:String,
    Name: String,
    Father_Name: String,
    Date_of_Join: String,
    M2_Permenant_Date: String,
    Date_of_Resignation: String,
    Date_of_Birth: String,
    Mobile_NO: String,
    Postal_Address: String,
    Name_of_Nominee: String,
    Month:String,
    Salary: Number,
    Basic: Number,
    HRA: Number,
    Allowance:Number,
    LOP:Number,
    L_O_P:Number,
    total_salry:Number,
    Designation: String,
    Aadhar_No: String,
    PAN: String,
    Bank_AC_Number: String,
    IFSC_code: String,
    Emp_status: String,
    Company_Name: String
})
const word=["Jan","Feb","Mar","Apr"]
let date=new Date()
let month=word[date.getMonth()-1]

// const file=async(req,res)=>{
// if(req?.file!=undefined){
//     let path = "./files/" + req?.file.filename

//     const workbook = xlsx.readFile(path);
//     const worksheet = workbook.Sheets['1674203079129-Employee details'];
//     var data = xlsx.utils.sheet_to_json(worksheet);
//     var month=data[0].Month
//     console.log(month);
// }
// }


// console.log(mon.);
const model = mongoose.model(month, EmployeeSchema)

const saveEmpDetails = async (data) => { 
   
        const idValue=await model.find({"id":data.id})
        if(idValue.length==0){
            const list=new model(data);
            const saveCSV=await list.save();
            return saveCSV
        }
        else if(idValue.length!=0){
            const command="Id is already exist"
            return command
        }
        else{
            return false
        }
    
}

const getEmpDetails = async (data) => {
    let getInfo
    if (data.Mobile_NO) {
        getInfo = await model.aggregate([
            { $match: { Mobile_NO: data.Mobile_NO } }
        ])
    }
    else{
        getInfo=await model.find({})
    }
    return getInfo
} 

const updateEmpDetails = async (data) => {
    try{
            const updateDetail = await model.updateMany(
                { Mobile_NO: data.Mobile_NO },
                {
                    $set: {
                        "id": data.id,                 
                        "Name": data.Name,
                        "Father_Name": data.Father_Name,
                        "Date_of_Jion": data.Date_of_Jion,
                        "M2_Permenant_Date": data.M2_Permenant_Date,
                        "Date_of_Resignation": data.Date_of_Resignation,
                        "Date_of_Birth": data.Date_of_Birth,
                        "Postal_Address": data.Postal_Address,
                        "Name_of_Nominee": data.Name_of_Nominee,
                        "Salary": data.Salary,
                        "LOP": data.LOP,
                        "LOP_total":data.LOP_total,
                        "Designation": data.Designation,
                        "Aadhar_No": data.Aadhar_No,
                        "PAN": data.PAN,
                        "Bank_AC_Number": data.Bank_AC_Number,
                        "IFSC_code": data.IFSC_code,
                        "Emp_status": data.Emp_status,
                        "Company_Name": data.Company_Name
                    }
                },
                {new:true}
            )
            console.log(updateDetail);
            return updateDetail
}
catch(error){
    return false
}
}

const totalEmplyeeCount=async(data)=>{
    try {
       const emplyeeCount=await model.find().count()

    return emplyeeCount
    } catch (error) {
        return false
    }
}

const activedetails=async(data)=>{
    let a;
    a=await model.aggregate([

        {$match:{"Emp_status":"On Roll"}}
    ])
        return a;
}

const activecount=async(req,res)=>{
    let ic=await model.aggregate([
        {$match:{"Emp_status":"On Roll"}},
        {$count:"Emp_status"}
    ])
    return ic;
}

const inactivedetails=async(data)=>{
    let a;
    a=await model.aggregate([

        {$match:{"Emp_status":"Resigned"}}
    ])
        return a;
}


const inactivecount=async(data)=>{
 let a;

    a=await model.aggregate([
        {$match:{"Emp_status":"Resigned"} } ,
        // {$group:{_id:{"$Emp_status":Resigned}}},
        {$count:"Emp_status"}
       ])
       return a;
   
}




module.exports = {
    saveEmpDetails,
    getEmpDetails,
    updateEmpDetails,
    totalEmplyeeCount,
    activecount,
    inactivecount,
    activedetails,
    inactivedetails,
    // file
}
