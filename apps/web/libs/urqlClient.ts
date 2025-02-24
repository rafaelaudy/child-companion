import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: "http://localhost:4000/graphql",
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const getServerClient = registerUrql(makeClient).getClient;
