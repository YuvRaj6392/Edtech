
//app is equal to require('express')
module.exports=app=>{
    var router=require('express').Router();
    const Tutorial=require('../controllers/tutorial.controller')

    //adding a new course

    router.post('/add',Tutorial.create)

    //retrieve all courses
    router.get('/',Tutorial.findAllCourses)

    //retrieve courses by category
    router.get('/categories/:categoryName',Tutorial.findCourseByCategory)

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

    app.use("/api/tutorials",router)
}   