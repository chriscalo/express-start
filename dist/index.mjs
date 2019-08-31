import portfinder from 'portfinder';

var findPort = function (start) {
  if ( start === void 0 ) start = 8000;

  try {
    return Promise.resolve(portfinder.getPortPromise({
      port: start
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

var start = function (server, startPort) {
  if ( startPort === void 0 ) startPort = 8000;

  try {
    function _temp(PORT) {
      server.listen(PORT, function () {
        console.log(("App listening on port " + PORT));
        console.log("Press Ctrl+C to quit.");
      });
    }

    var _process$env$PORT = process.env.PORT;
    return Promise.resolve(_process$env$PORT ? _temp(_process$env$PORT) : Promise.resolve(findPort(startPort)).then(_temp));
  } catch (e) {
    return Promise.reject(e);
  }
};

export default start;
export { start };
//# sourceMappingURL=index.mjs.map
