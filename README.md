# express-start

Simple utility for starting an [express][express.js] server with
automatic port selection.

Installation:

``` sh
npm install express-start
# or
yarn add express-start
```

Usage:

``` js
const express = require("express");
const { start } = require("express-start");

const server = express();

server.get("/", (req, res) => {
  res.send("Hello, world!");
});

start(server);
// or
start(server, 8000);
```

The logic for selecting a port is as follows:

1. if `process.env.PORT` is defined, it tries that port and fails if it's not
   available
2. the `port` parameter in `start(server, port)` defaults to `8000` when a falsy
   value or no value is provided
3. it first tries to listen on `port`, incrementing it until one is found that
   is available (`8001`, `8002`, `8003`, etc)

Console output in development (when `process.env.NODE_ENV !== 'production'`):

``` text
App listening at http://localhost:8000/
Press Ctrl+C to quit.
```

In development, the URL is copied to the clipboard so you can paste it into a
browser.

Console output in production (when `process.env.NODE_ENV === 'production'`):

``` text
App listening on port 8000
Press Ctrl+C to quit.
```

[express.js]: https://expressjs.com
