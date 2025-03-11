import { v4 as uuid } from "uuid";

export class Product {
	id?: string;
	name!: string;
	price!: number;
	description!: string;
	category!: string;
	quantity!: number;

	constructor() {
		if (!this.id) {
			this.id = uuid();
		}
	}
}
