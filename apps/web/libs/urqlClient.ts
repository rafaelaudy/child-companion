import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: process.env.NEXT_PUBLIC_API_URL || "",
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const getServerClient = registerUrql(makeClient).getClient;
