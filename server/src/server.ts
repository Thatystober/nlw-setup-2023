import Fastify from "fastify"
import cors from "@fastify/cors"
import { appRoutes } from "./lib/routes"

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
    host: '0.0.0.0',
    port: 3000,
})
.then(async () => {
    console.log('HTTP Server Running!');
});
