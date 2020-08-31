// Importing class and fetch data to display

const productmodel = require('../models/product');

exports.addproduct = (req,res,next)=>{
    res.render('addproduct');
}


exports.products = (req,res,next)=>{ 
    // Fetching data using model class by the static method defined in it by us
    const productsname = productmodel.fetchAll()
    .then((result)=>{
        console.log("*******************************************************************");
        console.log(result[0]);
        console.log("*******************************************************************");
        res.render('products',{prod:result[0]});
    })
    .catch((err)=>{
        console.log(err);
    });
    // console.log(productsname);
    
}

exports.editing = (req,res,next)=>{ 
    // Fetching data using model class by the static method defined in it by us
    const productsname = productmodel.fetchAll();
    // console.log(productsname);
    res.render('products',{'products':productsname});
}

