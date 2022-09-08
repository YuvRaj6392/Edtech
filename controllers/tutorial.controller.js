const db=require('../models');
const Tutorial=db.tutorials;

//create and save a course
exports.create=(req,res)=>{
    if(!req.body.title)
    {
        res.status(400).send({
            message:"Contents cannot be empty"
        })
    }
    const tutorial=new Tutorial({
        title:req.body.title,
        description:req.body.description,
        published:req.body.published,
        skills:req.body.skills.toString().split(","),
        chapters:req.body.chapters.toString().split(","),
        priceInRupees:req.body.priceInRupees,
        priceAfterDiscount:req.body.priceAfterDiscount,
        category:req.body.category,
        imageUrl:req.body.imageUrl,
        videoUrl:req.body.videoUrl,
        notesUrl:req.body.notesUrl,
        duration:req.body.duration,
        popularity:req.body.popularity
    })
    tutorial.save(tutorial).then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:"Some error occurred while creating the course"
        })
    })
}


exports.findAllCourses=(req,res)=>{
    Tutorial.find({}).then((data)=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:"Some error occurred while retrieving the course"
        })
    })
}

exports.findCourseByCategory=(req,res)=>{
    const categoryName=req.params.categoryName;
    var condition={category:categoryName}
    Tutorial.find(condition).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:"Some error occurred while retrieving the course"
        })
    })
}

exports.findCoursesById=(req,res)=>{
    const id=req.params.id;
    Tutorial.find({id:id}).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message:"Some error occurred while retrieving the course"
        })
    })
}

