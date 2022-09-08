const db=require('../models');
const User=db.users;

//create and save user in db
exports.signup=(req,res)=>{
    //validate request
    if(!req.body.email && !req.body.password)
    {
        res.status(400).send({
            message:"Please provide email and password to continue"
        })
        return;
    }

    User.findOne({email:req.body.email},(err,user)=>{
        if(user==null)
        {
            //signup user
            const user=new User({
                email:req.body.email,
                password:req.body.password,
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                role:req.body.role
            })
            user.save(user).then((data)=>{
                res.send(data)
            }).catch(err=>{
                res.status(400).send({
                    message:"Something went wrong. Please try again later!"
                })
            })
        }
        else
        {
            res.status(400).send({
                message:"user already exists!"
            })
        }
    })
}

exports.login=(req,res)=>{
    //validate request
    if(!req.body.email && !req.body.password)
    {
        res.status(400).send({
            message:"Please provide email and password to continue"
        })
        return;
    }
    User.findOne({email:req.body.email},(err,user)=>{
        if(user==null)
        {
            res.status(401).send({
                message:"Email or password is not correct!"
            })
        }
        else
        {
            if(req.body.password==user.password)
            {
                res.send(user);
            }
            else
            {
                res.status(400).send({
                    message:"passport is incorrect!"
                })
            }
        }
    })
}