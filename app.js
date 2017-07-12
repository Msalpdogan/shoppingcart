//


var http = require ('http');
var fs= require('fs');
var express = require('express');   
var path =require('path');
var app = express(); 

app.use('/assets', express.static(path.join( __dirname , 'assets' )));

app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.get('/hizmetler',function(req,res)
{
    res.sendFile(path.join(__dirname,'hizmetler.html'));  
});
app.get('/online',function(req,res)
{
     res.sendFile(path.join(__dirname,'online.html'));
});
app.get('/urunler',function(req,res)
{
     res.sendFile(path.join(__dirname,'urunler.html'));
});

 
app.listen(120);