import test from "ava";
import { expect } from "chai";
import express from "express";
import portfinder from "portfinder";

import { start } from "./index";
import { findPort } from "./find-port";

test("starts server", async t => {
  const server = express();
  
  const listener = await start(server);
  const { port } = listener.address();
  
  expect(port).to.be.a("number");
});

test("starts server with specified port", async t => {
  const server = express();
  const startPort = 3000;
  
  const listener = await start(server, startPort);
  const { port } = listener.address();
  
  expect(port).to.be.a("number");
  expect(port >= startPort).to.be.true;
});
