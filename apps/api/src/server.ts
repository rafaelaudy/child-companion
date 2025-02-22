import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createHandler } from 'graphql-http/lib/use/express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { mergeResolvers } from '@graphql-tools/merge';
import { join } from 'path';
// import sequelize from './database';

import { resolverPrompt } from './prompt/resolver';

dotenv.config();

const startServer = async () => {
  // Load all .gql schema files from the project (including nested domains)
  const schemaPath = join('**/*.gql');
  const schema = loadSchemaSync(schemaPath, {
    loaders: [new GraphQLFileLoader()],
  });

  // Merge all resolvers
  const resolvers = mergeResolvers([resolverPrompt]);

  // Initialize Express app
  const app = express();

  // await sequelize.sync();

  // Set up the GraphQL endpoint using graphql-http
  app.use(
    '/graphql',
    // cors(),
    // bodyParser.json(),
    createHandler({
      schema,
      rootValue: resolvers,
    }),
  );

  app.listen(4000, () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
};

startServer();
