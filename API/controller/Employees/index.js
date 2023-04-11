
const service = require("./service");

const xlsx = require('xlsx');

const uploadEmpDetailFile = async (req, res) => {
    try {
        if (req.file == undefined) {
            res.send({ code: 400, Message: "Please upload file..!" })
            console.log(req.file)
        }
        let path = "./files/" + req.file.filename

        const workbook = xlsx.readFile(path);
        const worksheet = workbook.Sheets['1674203079129-Employee details'];
        var data = xlsx.utils.sheet_to_json(worksheet);
        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i].Month);
            
        // }
        var year = new Date().getFullYear()
        var month = new Date().getMonth()
        // console.log(month);
        var noOfDate = new Date(year, month, 0).getDate()
        for (item of data) {

            const getDetails = await service.getEmpDetails({ Mobile_NO: item.Mobile_NO })
            if (getDetails.length === 0) {
                var salary
                var total
                if (item.LOP >= 2) {
                    salary = item.Salary / noOfDate * item.LOP;
                    total = item.Salary - salary
                }
                else if (item.LOP <= 1 || item.LOP == undefined) {
                    salary = 0
                    total = item.Salary
                }
                item.L_O_P=Math.round(salary) 
                // item.L_O_P=salary
                item.total_salry =Math.round(total)
                var saveDetail = await service.saveEmpDetails(item)
            }
            else {
                var salary
                var total
                if (item.LOP >= 2) {
                    salary = item.Salary / noOfDate * item.LOP;
                    total = item.Salary - salary

                }
                else if (item.LOP <= 1 || item.LOP == undefined) {
                    salary = 0
                    total = item.Salary
                }
                item.L_O_P=Math.round(salary)
                item.total_salry = total
                // console.log(item.LOP_total);
                var updateDetail = await service.updateEmpDetails(item)

            }

        }
        // console.log(updateDetail);
        // console.log(saveDetail);
        if (saveDetail == false) {
            res.send({ Message: "Successfully updated" })
        }
        else if (updateDetail != false || saveDetail != false) {
            res.send({ code: 200, message: "File Uploaded...!" })
        }
    } catch (error) {
        res.send({ code: 400, Message: "something went wrong" })
        // return false
        console.log(error);
    }
}

const getEmpdata = async (req, res) => {
    let getdata = await service.getEmpDetails(req.body)
    res.send({ code: 200, data: getdata })
}

const EmployeeCount = async (req, res) => {
    let totalEmp = await service.totalEmplyeeCount(req.body)
    res.send({ code: 200, data: totalEmp })
    console.log(totalEmp);
}

const activedetails = async (req, res) => {
    let adetails = await service.activedetails(req.query)
    res.send({ code: 200, data: adetails })
}

const activecount = async (req, res) => {
    let ah = await service.activecount(req.query)
    res.send({ code: 200, data: ah[0].Emp_status })
    console.log(ah);
}

const inactivecount = async (req, res) => {
    let b = await service.inactivecount(req.query)
    res.send({ code: 200, data: b[0].Emp_status })
    console.log(b)
}

const inactivedetails = async (req, res) => {
    let iadetails = await service.inactivedetails(req.query)
    res.send({ code: 200, data: iadetails })
}



module.exports = {
    uploadEmpDetailFile,
    getEmpdata,
    EmployeeCount, inactivecount,
    activecount, activedetails,
    inactivedetails
}