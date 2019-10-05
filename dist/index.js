function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var portfinder = _interopDefault(require('portfinder'));

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
      return Promise.resolve(server.listen(PORT, function () {
        console.log("");
        console.log(("App listening on port " + PORT));
        console.log("Press Ctrl+C to quit.");
        console.log("");
      }));
    }

    var _process$env$PORT = process.env.PORT;
    return Promise.resolve(_process$env$PORT ? _temp(_process$env$PORT) : Promise.resolve(findPort(startPort)).then(_temp));
  } catch (e) {
    return Promise.reject(e);
  }
};

exports.start = start;
exports.default = start;
//# sourceMappingURL=index.js.map
