const express = require('express')
const path = require('path')
const app = express();
const {rootRouter} = require('./routers')
const {sequelize} = require('./models')
const Fingerprint = require('express-fingerprint');
// Cái ứng dụng sử dụng kiểu JSON
app.use(express.json())

// Cài đặt static file
const publicPathDirectory = path.join(__dirname, "./public") // __dirname là thư mục hiện tại
app.use("/public" , express.static(publicPathDirectory)); // Thêm /public

//Cài đặt fingerprint
app.use(Fingerprint());

// Dùng routers
app.use('/api/v1', rootRouter)

const port =3000;
// Lắng nghe sự kiện kết nối
app.listen(port, async ()=>{
    console.log(`App listening on http://localhost:${port}`);
    try {
        await sequelize.authenticate();
        console.log('success');
    } catch (error) {
        console.log(error);
    }
})
