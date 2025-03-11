import { Product } from "../model/Product";
import { IproductDTO, IProductsRepository } from "./IProductsRepository";

export class ProductsRepository implements IProductsRepository {
	private products: Product[];

	private static INSTANCE: ProductsRepository;

	constructor() {
		this.products = [];
	}

	public static getInstance(): ProductsRepository {
		if (!ProductsRepository.INSTANCE) {
			ProductsRepository.INSTANCE = new ProductsRepository();
		}
		return ProductsRepository.INSTANCE;
	}

	create({ name, price, description, category, quantity }: IproductDTO): Promise<void> {
		const product = new Product();

		Object.assign(product, {
			name,
			price,
			description,
			category,
			quantity,
		});

		this.products.push(product);

		return Promise.resolve();
	}
	list(): Promise<Product[]> {
		return Promise.resolve(this.products);
	}
	findById(id: string): Promise<Product | undefined> {
		const product: Product | undefined = this.products.find((product) => product.id === id);

		return Promise.resolve(product);
	}
	findByName(name: string): Promise<Product | undefined> {
		const product: Product | undefined = this.products.find((product) => product.name === name);

		return Promise.resolve(product);
	}

	update(id: string, data: IproductDTO): Promise<Product> {
		const productIndex = this.products.findIndex((product) => product.id === id);

		this.products[productIndex] = { ...this.products[productIndex], ...data };

		return Promise.resolve(this.products[productIndex]);
	}

	delete(product: Product): Promise<void> {
		const productIndex = this.products.findIndex((p) => p.id === product.id);

		this.products.splice(productIndex, 1);

		return Promise.resolve();
	}
}
