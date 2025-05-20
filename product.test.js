const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product.js');

beforeEach(() => {
    resetProducts();
});

describe('addProduct', () => {
    it('should add a product and increase the id', () => {
        addProduct('Product1', 1)
        expect(getProducts()).toEqual([{id:0, name:'Product1', price:1}])
        addProduct('Product2', 2)
        expect(getProducts()).toEqual([{id:0, name:'Product1', price:1},{id:1, name:'Product2', price:2}])
    });
    it('should throw error if product already exists', () => {
        addProduct('Product1', 1)
        expect(() => addProduct('Product1', 1)).toThrow('Product with that name already exists');
    });
    it('should throw error if product params are not defined', () => {
        expect(() => addProduct('Product1')).toThrow('name and price must be defined');
    });
});

describe('removeProduct', () => {
    it('should remove a product given the id', () => {
        addProduct('Product1', 1)
        removeProduct(0)
        expect(getProducts()).toEqual([])
    });
    it('should throw error if product does not exist', () => {
        expect(() => removeProduct(0)).toThrow('Product does not exist')
    });
});

describe('getProduct', () => {
    it('should return a product given the id', () => {
        addProduct('Product1', 1)
        expect(getProduct(0)).toEqual({ id: 0, name: 'Product1', price: 1 })
    });
    it('should throw error if product does not exist', () => {
        expect(() => getProduct(0)).toThrow('Product does not exist')
    });
});

describe('updateProduct', () => {
    it('should update an existing product with the provided parameters', () => {
        addProduct('Product1', 1)
        updateProduct(0, 'Updated', 1.5)
        expect(getProducts()).toEqual([{id:0, name:'Updated', price:1.5}])
    });
    it('should return error if product does not exist', () => {
        expect(() => updateProduct(0, 'Updated', 1.5)).toThrow('Product does not exist')
    });
});

