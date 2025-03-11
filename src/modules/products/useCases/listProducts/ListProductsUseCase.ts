import { Product } from "../../model/Product";
import { IProductsRepository } from "../../repository/IProductsRepository";

export class ListProductsUseCase {
	constructor(private productRepository: IProductsRepository) {}

	async execute(): Promise<Product[]> {
		return await this.productRepository.list();
	}

	async findProductById(id: string): Promise<Product | undefined> {
		return await this.productRepository.findById(id);
	}
}
