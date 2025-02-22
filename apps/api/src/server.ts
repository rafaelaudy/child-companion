import dotenv from 'dotenv';
import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { mergeResolvers } from '@graphql-tools/merge';
import { join } from 'path';
import sequelize from './database';

import { resolverPrompt } from './prompt/resolver';

dotenv.config();

const startServer = async () => {
  const schemaPath = join('**/*.gql');
  const schema = loadSchemaSync(schemaPath, {
    loaders: [new GraphQLFileLoader()],
  });

  const resolvers = mergeResolvers([resolverPrompt]);

  const app = express();

  await sequelize.sync();

  app.use(
    '/graphql',
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
