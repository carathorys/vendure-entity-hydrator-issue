import gql from 'graphql-tag';

const myCustomEntityAdminApiExtensions = gql`
  type MyCustomEntity implements Node {
    id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    code: String!
  }

  extend type Query {
    getDataWithEntityHydrator(id: ID): Customer!
    getDataWithJoin(id: ID): Customer!
  }

`;
export const adminApiExtensions = gql`
  ${myCustomEntityAdminApiExtensions}
`;
export const shopApiExtensions = gql`
  ${myCustomEntityAdminApiExtensions}
`;