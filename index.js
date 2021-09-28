import express from "express";
import mongoose from "mongoose";
import http from "http";
import { makeExecutableSchema } from "graphql-tools-fork";
import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import config from "./config";

mongoose.connect(config.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false, // save network load
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("MongoDB connected!");
});

async function startApolloServer() {
  const app = express();

  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({
    typeDefs: importSchema("./schema.graphql"),
    resolvers: {
      Query,
      Mutation,
    },
  });

  const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({ app }); // TODO: might need to add path and/or cors

  httpServer.listen(config.port || 5000, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`🚀 Server listen on ${config.port || 5000}...`);
  });
}
startApolloServer();
