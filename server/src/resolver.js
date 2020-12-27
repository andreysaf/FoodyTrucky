module.exports = {
    Query: {
        vendors: async (_, __, { dataSources }) => 
            dataSources.vendorAPI.getAllVendors(),
        vendor: async (_, { id }, { dataSources}) =>
            dataSources.vendorAPI.getVendor({vendorId : id}),
    }
}