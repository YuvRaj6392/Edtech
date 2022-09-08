module.exports=(mongoose)=>{
const enrollment=mongoose.model('enrollment',mongoose.Schema({
    userId:{
        type:String
    },
    courseId:{
        type:String
    }
}))
return enrollment;
}