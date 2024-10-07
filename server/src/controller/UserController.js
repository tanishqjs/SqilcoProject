const UserModel = require('../models/userModel.js');

module.exports.CreaterUser = async (req, res) => {

    try {

        const validName = /^[a-zA-Z ]+$/;
        const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

        const data = req.body;
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: 'Pls Provided Body Data' })

        const { name, email, password } = data;
        console.log(validName.test(name))
        if (!name) return res.status(400).send({ status: false, msg: 'Pls Provided Name' })
        if (!email) return res.status(400).send({ status: false, msg: 'Pls Provided email' })
        if (!password) return res.status(400).send({ status: false, msg: 'Pls Provided Password' })

        const checkUserId = await UserModel.findOne({ email: email })

        if (checkUserId) return res.status(400).send({ status: false, msg: 'User Already Present in DB' })


        const CreateUserDataDB = await UserModel.create(data)
        console.log(CreateUserDataDB)
        return res.status(201).send({ status: true, msg: "Successfully Create Data", data: CreateUserDataDB })
    }
    catch (error) { return res.status(500).send({ status: false, msg: error.message }) }
}