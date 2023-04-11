const service = require("./service")

const admin = async (req, res) => {
    req.body.Email = "kaviyakavi130@gmail.com"
    req.body.Password = "kaviyasang1210"

    const adminData = await service.adminProfile(req.body)
    if (adminData) {
        res.send({ code: 200, Message: adminData })
    }
    else {
        res.send({ code: 400, Message: "failure" })
    }
}

const login = async (req, res) => {
    Email = req.body.Email
    Password = req.body.Password

    const admin = await service.loginforAdmin(Email)
    console.log(admin);
    
    if (admin.length == 0) {
        res.send({ code: 400, Message: "Please enter correct email" })
    }
    else {
        if (Password == admin[0].Password) {
            res.send({ code: 200, Message: "Login success" })
        }
        else {
            res.send({ code: 400, Message: "Password is incorrect" })
        }
    }
}


module.exports = {
    admin,
    login
}