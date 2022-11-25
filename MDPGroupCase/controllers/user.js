const Product = require('../models/product');

exports.getIndex = (req,res,next)=>{
    Product.getAll().then(
        products =>{
            res.render('index',{
                title: 'Alışveriş',
                products: products[0],
                path:'/'
            } );
        }
    ).catch((err)=>{
        console.log(err)
    })
}
exports.getProducts = (req, res, next) => {
  
    Product.getAll()
        .then(products => {
            res.render('index', {
                title: 'Products',
                products: products[0],
                categories: categories,
                path: '/'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}
exports.getProduct = (req, res, next) => {
    Product.getId(req.params.productid)
        .then((product) => {
            res.render('product-detail', {
                title: product[0][0].name,
                product: product[0][0],
                path: '/products'
            });
        })
        .catch((err) => {
            console.log(err);
        });
}
