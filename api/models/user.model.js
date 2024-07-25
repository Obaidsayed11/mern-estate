import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    emails : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        
    }
 }, { Timestamp : true});

 const User = mongoose.model('User', userSchema);

 export default User;
    