import { Product } from "../model/Product";

export interface IproductDTO {
	id?: string;
	name: string;
	price: number;
	description: string;
	category: string;
	quantity: number;
}

export interface IProductsRepository {
	create(product: IproductDTO): Promise<void>;
	list(): Promise<Product[]>;
	findById(id: string | undefined): Promise<Product | undefined>;
	findByName(name: string): Promise<Product | undefined>;
	update(id: string, data: IproductDTO): Promise<IproductDTO>;
	delete(product: Product): Promise<void>;
}
