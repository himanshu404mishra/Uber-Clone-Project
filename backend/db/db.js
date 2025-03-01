const mongoose = require("mongoose")

function connectToDB () {
    mongoose.connect(process.env.DB_CONNECT)
    .then((res)=>{
        console.log("connected to DB")
    }).catch((err)=>{
        console.log("Error with db:: ", err)
    })
}
module.exports=connectToDB