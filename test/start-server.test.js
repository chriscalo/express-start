// FIXME: get these tests working

import test from "ava";
import express from "express";

import { start } from "../";
import { findPort } from "../find-port";

test("starts server", t => {
  const server = express();
  
  start(server).then(() => {
    t.pass();
  });
  
  t.true(markdownFile.length > 0);
});

// test("finds first available port", t => {
//
// });
