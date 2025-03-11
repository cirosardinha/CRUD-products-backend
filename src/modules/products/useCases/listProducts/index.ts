import { ProductsRepository } from "../../repository/ProductsRepository";
import { ListProductsController } from "./ListProductsController";
import { ListProductsUseCase } from "./ListProductsUseCase";

const productsRepository = ProductsRepository.getInstance();

const listProductsUseCase = new ListProductsUseCase(productsRepository);

export const listProductsController = new ListProductsController(listProductsUseCase);
