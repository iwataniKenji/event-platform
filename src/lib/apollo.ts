import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl5uf6t993eed01t8bur14utd/master", // url do graph cms
  cache: new InMemoryCache(), // cache na memória
});
