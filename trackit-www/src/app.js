import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./styles/styles.scss";

// import { firebase } from "./firebase/firebase";
import configureStore from "./store/configureStore";

import ClientsList from "./components/clients/client_list";

class App extends React.Component {
  render() {
    return <ClientsList />;
  }
}

// Configure Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: `http://${process.env.SERVER_URI}/${process.env.SERVER_GQL_PATH}`
  }),
  cache: new InMemoryCache()
});

const store = configureStore();
const jsx = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

ReactDOM.render(jsx, document.getElementById("app"));
