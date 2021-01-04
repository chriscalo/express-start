const { findPort } = require("./find-port");

async function start(server, startPort = 8000) {
  return new Promise(async (resolve, reject) => {
    const isDev = process.env.NODE_ENV !== "production";
    const PORT = process.env.PORT || await findPort(startPort);
    
    await server.listen(PORT, async function () {
      console.log("");
      
      if (isDev) {
        const clipboardy = require("clipboardy");
        const url = `http://localhost:${PORT}/`;
        await clipboardy.write(url);
        console.log(`App listening at ${url}`);
        console.log(`URL copied to clipboard.`);
      } else {
        console.log(`App listening on port ${PORT}`);
      }
      console.log("Press Ctrl+C to quit.");
      console.log("");
      
      resolve(this);
    });
  });
};

// default export
module.exports = start;

// named export
module.exports.start = start;
