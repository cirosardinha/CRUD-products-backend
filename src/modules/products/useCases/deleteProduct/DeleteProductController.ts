import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

type Params = { id: string };
export class DeleteProductController {
	constructor(private deleteProductUseCase: DeleteProductUseCase) {}

	async handle(request: FastifyRequest<{ Params: Params }>, reply: FastifyReply): Promise<void> {
		const { id } = request.params;

		try {
			const product = await this.deleteProductUseCase.findProductById(id);

			if (!product) {
				throw new Error("Product not found.");
			}

			await this.deleteProductUseCase.execute(product);

			return reply.status(200).send({ message: "Produto deletado com sucesso." });
		} catch (error) {
			console.error("Erro ao deletar produto:", error);
			reply.status(500).send({ message: "Erro ao deletar produto." });
		}
	}
}
