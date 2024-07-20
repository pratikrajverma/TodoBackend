const mongoose = require('mongoose')
require('dotenv').config();


const dbConnect = () => {
    mongoose.connect(process.env.Mongodb_baseUrl).then(()=>{
        console.log('database connectted successfully')
    }).catch((error)=>{
        console.log('database connectted failed')
        console.error(error)
        process.exit(1);
    })
}

module.exports = dbConnect;