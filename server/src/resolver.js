const { paginateResults } = require('./utils');

module.exports = {
    Query: {
        vendors: async (_, { regionId, pageSize = 20, after }, { dataSources }) => {
            const allVendors = await dataSources.vendorAPI.getAllVendors({ regionId });
            const vendors = paginateResults({
                after,
                pageSize,
                results: allVendors
            });
            return {
                vendors,
                cursor: vendors.length ? vendors[vendors.length - 1].cursor : null,
                hasMore: vendors.length ? vendors[vendors.length - 1].cursor !== allVendors[allVendors.length - 1].cursor : false
            };
        },
            
        vendor: async (_, { id }, { dataSources }) =>
            dataSources.vendorAPI.getVendor({vendorId : id}),
        regions: async (_, __, { dataSources }) => 
            dataSources.regionAPI.getAllRegions(),
        regionsByCountry: async(_, { country }, { dataSources }) => 
            dataSources.regionAPI.getRegionsByCountry({ country })
    }
}