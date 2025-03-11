import { IProductsRepository } from "../../repository/IProductsRepository";

interface IRequest {
	name: string;
	price: number;
	description: string;
	category: string;
	quantity: number;
}

export class CreateProductUseCase {
	constructor(private productsRepository: IProductsRepository) {}

	async execute(product: IRequest): Promise<void> {
		const productExists = await this.productsRepository.findByName(product.name);

		if (productExists) {
			throw new Error("Product already exists.");
		}

		await this.productsRepository.create(product);
	}
}
