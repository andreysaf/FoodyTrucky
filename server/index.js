const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolver');

const VendorAPI = require('./src/datasources/vendor');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        vendorAPI: new VendorAPI()
    })
});

server.listen().then(() => {
    console.log(`
    Server is running!
    Listening on port 4000
  `);
});