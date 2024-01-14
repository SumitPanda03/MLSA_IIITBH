const mongoose=require('mongoose') 

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    clgid:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    gh:{
        type:String,
        format:URL,
    },
    ig:{
        type:String,
        format:URL,
    },
    li:{
        type:String,
        format:URL,
    },
    mail:{
        type:String,
        format:URL,
        required:true
    },
    imgfront:{
        type:String,
        format:URL,
        // required:true
    },
    imgback:{
        type:String,
        format:URL,
        // required:true
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    }
})

//create model

const users=new mongoose.model('users',userSchema)

module.exports=users;