import { FastifyRequest, FastifyReply } from "fastify";
import { ListProductsUseCase } from "./ListProductsUseCase";

type Params = { id?: string };
export class ListProductsController {
	constructor(private listProductsUseCase: ListProductsUseCase) {}

	async handle(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		const params = request.params as Params;
		const { id } = params;

		if (id) {
			try {
				const product = await this.listProductsUseCase.findProductById(id);

				return reply.status(200).send(product);
			} catch (error) {
				console.error("Erro ao listar produto:", error);
				reply.status(500).send({ message: "Erro ao listar produto." });
			}
		} else {
			try {
				const products = await this.listProductsUseCase.execute();

				return reply.status(200).send(products);
			} catch (error) {
				console.error("Erro ao listar produtos:", error);
				reply.status(500).send({ message: "Erro ao listar produtos." });
			}
		}
	}
}
