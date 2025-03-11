import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repository/IProductsRepository";

export class DeleteProductUseCase {
	constructor(private productsRepository: IProductsRepository) {}

	async findProductById(id: string): Promise<Product | undefined> {
		return this.productsRepository.findById(id);
	}
	async execute(product: Product): Promise<void> {
		await this.productsRepository.delete(product);
	}
}
