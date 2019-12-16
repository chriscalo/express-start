const portfinder = require("portfinder");

async function findPort(start = 8000) {
  return await portfinder.getPortPromise({
    port: start,
  });
};

module.exports.findPort = findPort;
