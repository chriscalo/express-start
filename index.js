import { findPort } from "./find-port";

export async function start(server, startPort = 8000) {
  const isDev = process.env.NODE_ENV !== "production";
  const PORT = process.env.PORT || await findPort(startPort);
  
  const listener = await server.listen(PORT, async () => {
    console.log("");
    
    if (isDev) {
      const clipboardy = await import("clipboardy");
      const url = `http://localhost:${PORT}/`;
      clipboardy.writeSync(url);
      console.log(`App listening at ${url}`);
      console.log(`URL copied to clipboard.`);
    } else {
      console.log(`App listening on port ${PORT}`);
    }
    console.log("Press Ctrl+C to quit.");
    console.log("");
  });
  
  return listener;
};

export default start;
