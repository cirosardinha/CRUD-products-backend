import { IproductDTO, IProductsRepository } from "../../repository/IProductsRepository";

export class UpdateProductUseCase {
	constructor(private productsRepository: IProductsRepository) {}

	async execute(id: string, data: IproductDTO): Promise<IproductDTO> {
		const productExists = await this.productsRepository.findById(id);

		if (!productExists) {
			throw new Error("Product not found.");
		}

		return this.productsRepository.update(id, data);
	}
}
