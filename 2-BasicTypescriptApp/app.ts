import { ProductService } from "./ProductService";
import { Product } from "./Product";

let productService = new ProductService();
//console.log(productService.getProducts());
let newProduct: Product = { id: 5, name: "Iphone 6", category: "Telephone", price: 4000 }
productService.saveProduct(newProduct);
//console.log(productService.getProducts());
let newProduct2: Product = new Product(1,"Iphone 5", "Telephone", 5000);
productService.saveProduct(newProduct2);
//console.log(productService.getProducts());
let product = productService.getById(5);
productService.deleteProduct(product);
console.log(productService.getProducts());