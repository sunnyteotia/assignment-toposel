const mongoose = require('mongoose')
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],//only allow user or admin roles
        default:'user'
    },
    fullname:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        default:'male'
    },
    DOB:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true})
module.exports = mongoose.model('User',UserSchema)