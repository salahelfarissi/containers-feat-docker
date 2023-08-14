// more-or-less the example code from the hapi-pino repo
const hapi = require("@hapi/hapi");

async function start() {
  const server = hapi.server({
    host: "localhost",
    port: process.env.PORT || 3000,
  });

  server.route({
    method: "GET",
    path: "/",
    handler() {
      return { success: true };
    },
  });

  await server.register({
    plugin: require("hapi-pino"),
  });

  await server.start();

  return server;
}

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
