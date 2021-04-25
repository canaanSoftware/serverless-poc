const express = require("express");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const serverless = require("serverless-http");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const app = express();
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World - Canaan Software"
      }
    })
  })
});

app.use(bodyParser.json());
app.use(
  "/",
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

module.exports.handler = serverless(app);
