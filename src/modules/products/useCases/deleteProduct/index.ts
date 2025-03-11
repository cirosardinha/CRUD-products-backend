import { ProductsRepository } from "../../repository/ProductsRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const productsRepository = ProductsRepository.getInstance();

const deleteProductUseCase = new DeleteProductUseCase(productsRepository);

export const deleteProductController = new DeleteProductController(deleteProductUseCase);
