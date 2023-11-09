const  mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const Connection = async()=>{
    try{
      await mongoose.connect(process.env.MONGODB_URL )
      console.log("database is connected successfully")

    }
    catch(err){
        console.log("error: " + err)
    }
}
module.exports = Connection