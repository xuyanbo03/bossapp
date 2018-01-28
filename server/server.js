const express=require("express")
const mongoose=require("mongoose")
//连接MongoDB数据库集合
const DB_URL='mongodb://localhost:27017/bossapp'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
//建文档、字段
const User=mongoose.model('user',new mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
}))
//新增数据
// User.create({
//     user:'imooc',
//     age:18
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//删除数据
// User.remove({user:''},function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//更新数据
// User.update({user:'imooc'},{'$set':{age:20}},function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//新建app
const app=express();
const PORT=9093
app.get('/',function(req,res){
    res.send('<h1>Hello World</h1>')
})
app.get('/data',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
    //res.json({name:'boss app',type:'IT'})
})
app.listen(PORT,function(){
    console.log('Node app start at port '+PORT)
})