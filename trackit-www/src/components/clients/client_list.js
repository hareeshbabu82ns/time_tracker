import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const GQLQ_CLIENTS = gql`
  query {
    clients {
      id
      name
      description
    }
  }
`;

const ClientsList = ({ data: { clients } }) => {
  return (
    <div>
      <h3>Clients List</h3>
      <ul>
        {clients &&
          clients.map(client => <li key={client.id}>{client.name}</li>)}
      </ul>
    </div>
  );
};

export default graphql(GQLQ_CLIENTS)(ClientsList);
