import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import {schema} from './Schemas/index.js'

const app = express();
app.use(cors());

const PORT = 8000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} ...`);
});
