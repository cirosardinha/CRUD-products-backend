import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateProductUseCase } from "./UpdateProductUseCase";
import { IproductDTO } from "../../repository/IProductsRepository";

export class UpdateProductController {
	constructor(private updateProductUseCase: UpdateProductUseCase) {}

	async handle(
		request: FastifyRequest<{
			Params: { id: string };
			Body: { name: string; price: number; description: string; category: string; quantity: number };
		}>,
		reply: FastifyReply
	): Promise<FastifyReply> {
		const { id } = request.params;
		const product = request.body;

		await this.updateProductUseCase.execute(id, product);

		return reply.status(200).send({ message: "Produto atualizado com sucesso." });
	}
}
