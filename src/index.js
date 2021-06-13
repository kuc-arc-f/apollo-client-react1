import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
//import App from './App';
import AddTask from './component/AddTask';
import UpdateTask from './component/UpdateTask';
import DeleteTask from './component/DeleteTask';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation, 
  gql
} from "@apollo/client";
//
const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <AddTask />
      <UpdateTask />
      <DeleteTask />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

client.query({
  query: gql`
    query {
      tasks {
        id
        title
      }
    }
  `
}).then(result => console.log(result));
