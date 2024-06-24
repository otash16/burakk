import ProductModel from "../schema/Product.service";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
}

export default ProductService;