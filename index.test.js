import test from "ava";
import express from "express";

import { start } from "./index";
import { findPort } from "./find-port";

test("starts server", async ({ is, truthy }) => {
  const server = express();
  
  const listener = await start(server);
  const { port } = listener.address();
  
  is(typeof port, "number");
});

test("starts server with specified port", async ({ is, truthy }) => {
  const server = express();
  const startPort = 3000;
  
  const listener = await start(server, startPort);
  const { port } = listener.address();
  
  is(typeof port, "number");
  truthy(port >= startPort);
});
