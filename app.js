// ------------
//    CONSTS
// ------------

const express = require('express');

const app = express();
const PORT = 5000;
app.use(express.static('public'))
app.set('view engine','ejs');


// ------------
//    SERVER
// ------------

app.get('/',(req,res)=>{
    
    res.render('./layouts/main');
});

app.get('/login',(req,res)=>{
    
    res.render('./layouts/login');
});
app.get('/register',(req,res)=>{
    
    res.render('./layouts/register');
});
app.get('/produse',(req,res)=>{
    
    res.render('./layouts/produse');
});
app.get('/produse1',(req,res)=>{
    
    res.render('./layouts/produse1');
});
app.get('/about',(req,res)=>{
    
    res.render('./layouts/about');
});
app.listen(PORT, ()=>{
    console.log("Server running on port: ",PORT);
});




