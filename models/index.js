

const mongoose=require('mongoose');
const dbConfig=require('../configs/db.config')
const db={};
db.mongoose=mongoose;
db.url=dbConfig.url;
db.tutorials=require('./tutorial.model')(mongoose);
db.users=require('./user.model')(mongoose);
db.enrollments=require('./enrollment.model')(mongoose);
module.exports=db;


