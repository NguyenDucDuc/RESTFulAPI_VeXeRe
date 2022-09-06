
const jwt = require('jsonwebtoken');

const authenticate =(req , res , next) => { //Xác thực người dùng đã đăng nhập chưa
    const token = req.header("token");

    try {
        const decode = jwt.verify(token , "duc-nguyen-36");
        console.log({decode});
        if(decode){
            req.user = decode;
            next();
        }else{
            res.status(404).send("Bạn chưa đăng nhập!")
        }
    } catch (error) {
        res.status(500).send(error);
    }
    
}

module.exports = {
    authenticate
}