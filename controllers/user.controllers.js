const {Users , sequelize} = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const {name , email , password , numberPhone} = req.body;

    console.log(name , email , password , numberPhone);
    try {

        // Tạo ra 1 chuỗi ngẫu nhiên    
        const salt = bcrypt.genSaltSync(10) // Tạo đồng bộ
        // Mã hóa chuỗi salt + password
        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = await Users.create({
            name,
            password : hashPassword,
            email,
            numberPhone,
        })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req , res) => {
    const {email, password} = req.body;

    // Bước 1 : Tìm ra user đang đăng nhập dựa trên email
    const user = await Users.findOne({
        where : {
            email
        }
    })

    // Bước 2 : Kiểm tra mật khẩu có đúng hay không'

    if(user){
        const isAuthen = bcrypt.compareSync(password , user.password)
        
        if(isAuthen){
            const token = jwt.sign({ email : user.email , type : user.type },"duc-nguyen-36" , {expiresIn : 60 * 60})
            res.status(200).send({message : "Đăng nhập thành công !" , token : token})
        }else{
            res.status(500).send({message : "Đăng nhập thất bại !"})
        }
    }else{
        res.status(404).send({message : "Không tìm thấy email phù hợp !"})
    }

    

}



const getAllTrip = async(req , res) => {

    try {
        const [result] = await sequelize.query(`
        select users.name as userNname , fromStation.name as fromStation , toStation.name as toStation
        from users inner join tickets on users.id = tickets.user_id
        inner join trips on tickets.trip_id = trips.id
        inner join stations as fromStation on fromStation.id = trips.fromStation
        inner join stations as toStation on toStation.id = trips.toStation
    `)

        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
    
}
module.exports = {
    register,
    login,
    getAllTrip
}