import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:4001",
  cache: new InMemoryCache(),
  // headers: {
  //   authorization: Cookies.get('token') ? `Bearer ${Cookies.get('token')}` : ""},
  // };
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
