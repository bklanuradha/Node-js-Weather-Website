const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send('helo from express');
});

app.get('/api',(req,res)=>{
    res.send('from api');
});

app.get('/help',(req,res)=>{
    res.send('from help');
});

app.get('*',(req,res)=>{
    res.send('page not found');
})

app.listen(3000,()=>console.log('server is on port 3000'));