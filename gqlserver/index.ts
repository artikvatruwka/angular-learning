import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './graphql/typedefs.js';
import resolvers from './graphql/resolvers.js';

const MONGODB = 'mongodb://0.0.0.0:27017/final-fantasy'

const server = new ApolloServer({
  typeDefs,
  resolvers
});

mongoose.connect(MONGODB).then((res)=>{
  server.listen({port:5000})
})