import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource"

export class ProductService implements IProductService {

    private products: Array<Product>;

    constructor() {
        let dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        dataSource.getProducts().forEach(p => this.products.push(p));
    }

    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0];
    }

    getProducts(): Array<Product> {
        return this.products;
    }

    saveProduct(product: Product): void {
        if (product.id == null || product.id == 0) {
            product.id = this.generateId();
            this.products.push(product);
        } else {
            let indexOfModifyElement = -1;
            for (let index = 0; index < this.products.length; index++) {
                if (this.products[index].id == product.id) {
                    indexOfModifyElement = index;
                }
            }
            if (indexOfModifyElement == -1) {
                this.products.push(product);
            } else {
                this.products.splice(indexOfModifyElement, 1, product);
            }
        }
    }

    deleteProduct(product: Product): void {
        if (product.id != null || product.id != 0) {
            let index = this.products.indexOf(product);
            this.products.splice(index, 1);
        } else {
            throw new Error("Product can't deleted because of unexpected id");
        }
    }

    private generateId(): number {
        let key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    }
}