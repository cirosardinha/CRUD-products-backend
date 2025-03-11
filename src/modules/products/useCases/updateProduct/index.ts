import { ProductsRepository } from "../../repository/ProductsRepository";
import { UpdateProductController } from "./UpdateProductController";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

const productRepository = ProductsRepository.getInstance();

const updateProductUseCase = new UpdateProductUseCase(productRepository);

export const updateProductController = new UpdateProductController(updateProductUseCase);
