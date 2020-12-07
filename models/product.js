const products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        products.push(this);
    }

    // Static - Able to call on class itself, not instanced object
    static fetchAll() {
        return products;
    }
}