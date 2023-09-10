import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { cyan } from "colors";

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
require("dotenv").config();

const API_PORT = process.env.PORT || 5000;

connectDB();

const server = new ApolloServer({
  schema,
});

async function main() {
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 5000 },
  });
  console.log(`Server is listening at : ${url}`.cyan.underline.bold);
}

main();
