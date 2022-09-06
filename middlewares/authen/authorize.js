const authorize = (arrType) => 
    (req , res , next) => {
        const {user} = req;
    
        if(arrType.findIndex((e) => e === user.type) > -1){
            next();
        }else{
            res.status(403).send("Bạn đã đăng nhập , những không có quyền ")
        } 
}

module.exports = {
    authorize
}