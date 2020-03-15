import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Samsung S5", "Telephone", 1000),
            new Product(2, "Samsung S6", "Telephone", 2000),
            new Product(3, "Samsung S7", "Telephone", 3000),
            new Product(4, "Samsung S8", "Telephone", 4000),
        );

        /*this.products.push({id:1, name:"Samsung S5", category:"Telephone", price:1000});
        this.products.push({id:2, name:"Samsung S6", category:"Telephone", price:2000});
        this.products.push({id:3, name:"Samsung S7", category:"Telephone", price:3000});
        this.products.push({id:4, name:"Samsung S8", category:"Telephone", price:4000});*/
    }

    getProducts(): Array<Product> {
        return this.products;
    }
}