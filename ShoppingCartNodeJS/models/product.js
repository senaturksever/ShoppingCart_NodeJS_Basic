const connection = require('../services/database');

module.exports = class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;

    }

    static getAll() {
        return connection.execute('SELECT * FROM products');
    }

    saveProduct() {
        return connection.execute('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [this.name,this.price,this.description]);
    }

    static getId(id){
        return connection.execute('SELECT * FROM products WHERE products.id=?', [id]);
    }

    static Update(product){
        return connection.execute('UPDATE products SET products.name=?, products.price=?, products.description=? WHERE products.id=?', [product.name,product.price,product.description,product.id])
    }
    static DeleteById(id) {
        return connection.execute('DELETE FROM products WHERE id=?', [id]);
    }
}