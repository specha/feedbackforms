const express=require('express');
const morgan=require('morgan');
const helmet=require('helmet');

const app=express();

app.use(helmet());
app.use(morgan('short'));
app.use(express.json());
app.use(express.static('./public'));
app.listen(3000,(req,res)=>{
    console.log(`Listening at http://localhost:3000`);
});