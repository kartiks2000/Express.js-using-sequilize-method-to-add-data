
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');


const frontroutes = require('./routes/front');
const backroutes = require('./routes/back');

const sequelize = require('./database');

const app = express();

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.set('view engine', 'ejs');
app.set('views','views');

app.use(frontroutes.route);
app.use(backroutes.route);

// Handeling 404
app.use((req,res,next)=>{
    res.render('404');
});


sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch((err)=>{
    console.log("Sorry cant connect to the database!!!!");
    console.log(err);
});

