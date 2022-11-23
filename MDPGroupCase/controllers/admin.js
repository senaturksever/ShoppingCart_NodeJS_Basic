const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    const products = Product.getAll();

    Product.getAll()
        .then(products => {
            res.render('products', {
                title: 'Admin Products',
                products: products[0],
                path: '/products',
                action: req.query.action
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getAddProduct = (req, res, next) => {
    
    res.render('add-product', {
        title: 'New Product',
        path: '/add-product',
       
    });
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product();

    product.name= req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;

    //then'e bir değer yollamadığımız için boş bıraktık.
    product.saveProduct().then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err);
    })
}
exports.getEditProduct = (req,res,newxt)=>{
    Product.getId(req.params.productid).then((product)=>{
        res.render('edit-product', {
            title: 'Edit Product',
            path:'admin/products',
            product: product[0][0]
        })
    }).catch((err)=>{
        console.log(err)
    })
}
exports.postEditProduct = (req, res, next) => {

    const product = new Product();

    product.id = req.body.id;
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;

    Product.Update(product)
        .then(() => {
            res.redirect('/admin/products?action=edit');
        })
        .catch((err) => {
            console.log(err);
        });
}
exports.postDeleteProduct = (req, res, next) => {
    Product.DeleteById(req.body.productid)
        .then(() => {
            res.redirect('/admin/products?action=delete');
        })
        .catch((err) => {
            console.log(err);
        });
}
