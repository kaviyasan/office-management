const express=require("express")
const router=express.Router();
const upload=require("./../multer/upload")
const index=require("./../controller/Employees/index")
const signin=require("./../controller/signin/index")
const admin=require("./../controller/admin/index")


let routes=(app)=>{
    router.post("/upload", upload.single("csvFile"),index.uploadEmpDetailFile)
    
    router.get("/getFiledata",index.getEmpdata)
    router.get("/totalEmployees",index.EmployeeCount)
    router.get("/activecount",index.activecount)
    router.get("/activedetails",index.activedetails)
    router.get("/inactivecount",index.inactivecount)
    router.get("/inactivedetails",index.inactivedetails)

    router.post("/admin",admin.admin)
    router.post("/login",admin.login)


    // router.post("/saveuser",signin.saveuser)
    router.post("/getuser",signin.getuser)

    app.use("/api",router)
}

module.exports=routes