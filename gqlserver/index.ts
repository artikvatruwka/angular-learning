import { ApolloServer } from '@apollo/server';
import mongoose from 'mongoose';
import typeDefs from './graphql/typedefs.js';
import resolvers from './graphql/resolvers.js';
import { startStandaloneServer } from '@apollo/server/standalone';

const MONGODB = 'mongodb://0.0.0.0:27017/final-fantasy'

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB).then((res) => {
  startStandaloneServer(server,{listen: { port: 4000 }}).then(val=>{ console.log(val.url);})
})