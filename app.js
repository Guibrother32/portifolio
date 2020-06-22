const express = require('express');

const app = express();


app.use(express.static(__dirname));

app.get("/", (req,res,next) =>{
    res.render('index');
})

app.listen(process.env.PORT || 5000);