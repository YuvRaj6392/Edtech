
//app is equal to require('express')
module.exports=app=>{
    var router=require('express').Router();

    //adding a new course

    router.post('/add')

    //retrieve all courses
    router.get('/')

    //retrieve courses by category
    router.get('/categories/:categoryName',(req,res)=>{
       res.send("your implementation works")
    })

    //retrieve all categories
    router.get('/categories')

    //retrieve all published courses
    router.get('/published')

    //retrieve a course by its id
    router.get('/:id')

    //update the course by id
    router.put('/:id')

    //delete a course by id
    router.delete('/:id')

    //delete all the courses
    router.delete('/')

    app.use("/api/tutorial",router)
}   