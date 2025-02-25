import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
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
  app.use(cors({ origin: process.env.CLIENT_URL as string, credentials: true }));
  app.use('/graphql', express.json(), (req, res, next) => {
    const { query, variables } = req.body;
    console.log(`Operation: ${query}`);
    console.log(`Variables:`, variables || {});
    next();
  });

  await sequelize.sync();

  app.use(
    '/graphql',
    createHandler({
      schema,
      rootValue: resolvers,
    }),
  );

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}/graphql`);
  });
};

startServer();
