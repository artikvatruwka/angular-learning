import { ApolloServer } from '@apollo/server';
import mongoose from 'mongoose';
import typeDefs from './graphql/typedefs.js';
import resolvers from './graphql/resolvers.js';
import { startStandaloneServer } from '@apollo/server/standalone';
import express from 'express'
import { inspect } from 'util'
const MONGODB = 'mongodb://0.0.0.0:27017/final-fantasy'

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB).then((res) => {
  startStandaloneServer(server,{listen: { port: 4000 }}).then(val=>{ console.log(val.url);})
})

const server2 = express();
server2.get('/',(req, res)=>{
  return `${inspect(req)}`
})
server2.listen(4001, ()=> {
  console.log('server at http://localhost:4001')
})