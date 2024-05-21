import { Product } from './product.interface';
import ProductModel from './product.model';

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const productService = {
  createProductDB,
  getAllProductDB
};
