const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { 
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginDrainHttpServer
  } = require('apollo-server-core');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors'); 
const jwt = require('jsonwebtoken');

require('dotenv').config();

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models');
const db = require('./db');

const getUser = token => {
  if(token){
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      throw new Error('Błędne dane sesji.');
    }
  }
}

async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  app.use(helmet());
  app.use(cors());
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground({ httpServer })
    ],
    playground: true,
    introspection: true,

    context: ({ req }) => {
      const token = req.headers.authorization;
      const user = getUser(token);
      return { models, user };
    }
  });

  await server.start({
    cors: {
      credentials: true,
      origin: [ process.env.PLAYGROUND_URL]
    }
  });

  server.applyMiddleware({ app, path: '/api' });

  await new Promise(resolve => httpServer.listen({ port: process.env.PORT || 4000, resolve}));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

db.connect(process.env.DB_HOST);

startApolloServer(typeDefs, resolvers);