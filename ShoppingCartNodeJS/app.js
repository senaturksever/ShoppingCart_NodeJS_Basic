const express = require('express');
const app =  express();
const bodyParser = require('body-parser');

const adminRouter = require('./router/admin');
const userRouter = require('./router/user');
const path=require('path');

app.set('view engine','pug');
app.set('views','./views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'../public')))
app.use('/admin',adminRouter); //yönetici işlemleri için linklere ekledik
app.use(userRouter);


app.listen(3000,()=>{
    console.log('listening on port 300')
})