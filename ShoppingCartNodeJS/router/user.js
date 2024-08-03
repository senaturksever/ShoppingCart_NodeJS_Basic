const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getIndex);
router.get('/products', userController.getProducts);
router.get('/products/:productid', userController.getProduct);


module.exports = router;