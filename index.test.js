import test from "ava";
import express from "express";
import clipboardy from "clipboardy";

import { start } from "./index";
import { findPort } from "./find-port";

// NOTE: use `test.serial()` to prevent tests from fighting over the same port

test.serial("Starts server", async (t) => {
  const server = express();
  
  const listener = await start(server);
  const { port } = listener.address();
  
  t.is(typeof port, "number");
});

test.serial("Starts server with specified port", async (t) => {
  const server = express();
  const startPort = 3000;
  
  const listener = await start(server, startPort);
  const { port } = listener.address();
  
  t.is(typeof port, "number");
  t.truthy(port >= startPort);
});

test.serial("Copies URL to clipboard in dev", async (t) => {
  const server = express();
  
  const listener = await start(server);
  const { port } = listener.address();
  
  const clipboardEntry = await clipboardy.read();
  const url = new URL(clipboardEntry);
  
  t.is(url.hostname, "localhost");
  t.is(url.port, String(port));
});

test.serial("Doesn't copy URL to clipboard in production", async (t) => {
  const server = express();
  
  process.env.NODE_ENV = "production";
  await clipboardy.write("foo");
  
  const listener = await start(server);
  
  t.is(await clipboardy.read(), "foo");
});
