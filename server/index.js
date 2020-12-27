const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const resolvers = require('./src/resolver');

const VendorAPI = require('./src/datasources/vendor');
const RegionAPI = require('./src/datasources/region');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        vendorAPI: new VendorAPI(),
        regionAPI: new RegionAPI(),
    })
});

server.listen().then(() => {
    console.log(`
    Server is running!
    Listening on port 4000
  `);
});