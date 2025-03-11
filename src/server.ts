import Fastify from "fastify";
import cors from "@fastify/cors";

import { productsRoutes } from "./routes/products.routes";

const fastify = Fastify();

fastify.register(cors, {
	methods: ["GET", "POST", "PUT", "DELETE"],
});

fastify.register(productsRoutes, { prefix: "/products" });

fastify.listen({ port: 3333 }, (err, address) => {
	if (err) {
		console.error("Erro ao iniciar o servidor:", err);
		process.exit(1);
	}

	console.log("HTTP server running!");
});
