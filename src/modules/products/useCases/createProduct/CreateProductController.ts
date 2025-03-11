import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
	constructor(private createProductUseCase: CreateProductUseCase) {}

	async handle(
		request: FastifyRequest<{
			Body: { name: string; price: number; description: string; category: string; quantity: number };
		}>,
		reply: FastifyReply
	): Promise<void> {
		const { name, price, description, category, quantity } = request.body;

		await this.createProductUseCase.execute({ name, price, description, category, quantity });

		return reply.status(201).send({ message: "Produto criado com sucesso." });
	}
}
