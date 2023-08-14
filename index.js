// more-or-less the example code from the hapi-pino repo
const Hapi = require("@hapi/hapi");

async function start() {
  const server = Hapi.server({
    host: "localhost",
    port: process.env.PORT || 3000,
    debug: false,
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
    options: {
      colorize: true,
    },
  });

  // also as a decorated API
  server.logger.info("another way for accessing it");

  // and through Hapi standard logging system
  server.log(["subsystem"], "third way for accessing it");

  await server.start();

  return server;
}

start().catch((err) => {
  console.log(err);
  process.exit(1);
});
