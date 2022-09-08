module.exports=(mongoose)=>{
    const user=mongoose.model('user',mongoose.Schema({
        email:{
            type:String
        },
        password:{
            type:String
        },
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        role:{
            type:String
        },
        isLoggedIn:{
            type:Boolean
        },
        token:{
            type:String
        }
    }))
    return user;
}