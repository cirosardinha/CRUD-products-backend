import { FastifyInstance } from "fastify";

import { createProductController } from "./../modules/products/useCases/createProduct/index";
import { listProductsController } from "./../modules/products/useCases/listProducts/index";
import { updateProductController } from "../modules/products/useCases/updateProduct";
import { deleteProductController } from "../modules/products/useCases/deleteProduct";

interface CreateProductBody {
	name: string;
	price: number;
	description: string;
	category: string;
	quantity: number;
}

export async function productsRoutes(app: FastifyInstance) {
	app.post<{ Body: CreateProductBody }>("/", async (request, reply) => {
		await createProductController.handle(request, reply);
	});

	app.get("/", async (request, reply) => {
		await listProductsController.handle(request, reply);
	});

	app.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
		await listProductsController.handle(request, reply);
	});

	app.put<{ Params: { id: string }; Body: CreateProductBody }>("/:id", async (request, reply) => {
		await updateProductController.handle(request, reply);
	});

	app.delete<{ Params: { id: string } }>("/:id", async (request, reply) => {
		await deleteProductController.handle(request, reply);
	});
}
