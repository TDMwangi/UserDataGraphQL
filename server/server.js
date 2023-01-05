import express from 'express';
import graphql, { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

import userData from './user.json' assert { type: "json" };

const app = express();

const PORT = 3000;

const RootQuery = 'query';
const Mutation = 'mutation';

const schema = new GraphQLSchema({query: RootQuery, mutation: Mutation});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} ...`);
});
