module.exports=app=>{
    const router=require('express').Router();


    //create an enrollment object and save it to the enrollment collection!
    router.post('/enroll')

    app.use('/api',router)
}