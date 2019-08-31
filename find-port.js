import portfinder from "portfinder";

export async function findPort(start = 8000) {
  return await portfinder.getPortPromise({
    port: start,
  });
};
