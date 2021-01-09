module.exports = {
    Query: {
        vendors: async (_, { regionId }, { dataSources }) => 
            dataSources.vendorAPI.getAllVendors({ regionId }),
        vendor: async (_, { id }, { dataSources }) =>
            dataSources.vendorAPI.getVendor({vendorId : id}),
        regions: async (_, __, { dataSources }) => 
            dataSources.regionAPI.getAllRegions(),
        regionsByCountry: async(_, { country }, { dataSources }) => 
            dataSources.regionAPI.getRegionsByCountry({ country })
    }
}