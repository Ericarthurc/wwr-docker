import { Application, Router } from "../deps.ts";

const router = new Router({ prefix: "/api" });
router.get("/", (ctx, next) => {
  ctx.response.body = { name: "Eric" };
});

const app = new Application();

app.use(router.routes()).use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port}`
  );
});

await app.listen({
  port: 3000,
});
