import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import App from "./App";

let url: string | undefined = "";

if (process.env.NODE_ENV !== "production") {
  url = "http://localhost:4001";
} else {
  url = "/graphql";
}

const httpLink = createHttpLink({
  uri: url,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
