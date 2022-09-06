module.exports=app=>{
    var router=require('express').Router();

    //create a user signup and save it to the user collection
    router.post('/signup')

    //verify login credentials, if verified set isLoggedIn as true
    router.post('/login')


    //logout the user based on the id and set the isLoggedIn as false
    router.post('/logout');

    app.use('/api',router);
}