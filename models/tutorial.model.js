module.exports=(mongoose)=>{
    const tutorial=mongoose.model('tutorial',
    
    mongoose.Schema({
        title:{
            type:String
        },
        description:{
            type:String
        },
        published:{
            type:Boolean
        },
        skills:[
            {
                type:String
            }
        ],
        chapters:[
            {
                type:String
            }
        ],
        priceInRupees:{
            type:Number,
            default:5000,
            min:0,
            max:30000
        },
        priceAfterDiscount:{
            type:Number,
            min:0,
            max:30000
        },
        category:{
            type:String
        },
        imageUrl:{
            type:String,
            default:" https://ik.imagekit.io/upgrad1/marketing-platform-assets/meta-images/home.jpg"
        },
        videoUrl:{
            type:String,
            default:"  https://www.youtube.com/watch?v=MTdpHs6HWwM"
        },
        notesUrl:{
            type:String,
            default:"  https://www.mongodb.com/mern-stack"
        },
        duration:{
            type:Number,
            default:60,
            min:0,
            max:1200
        },
        popularity:{
            type:Number,
            default:4.0,
           
        },

    })
    )
    return tutorial;
}
