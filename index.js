const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');
require('dotenv').config();
const db=require('monk')(process.env.DATABASE);
const forms=db.get('onlineform');
const app=express();
const parser=express.urlencoded({extended:false});
app.use(helmet());
app.use(morgan('short'));
app.use(express.static('./public'));
app.post('/submit',parser,async (req,res,next)=>{
    // console.log("Recieved data here");
    console.log(req.body);
    const result=await forms.insert({name:"Shikhar Mathur"});
    console.log(result);
    res.json({
        message:"recieved"
    });
});
const port=process.env.PORT||3000;
app.listen(port,(req,res)=>{
    console.log(`Listening at http://localhost:${port}`);
});