const { gql } = require('apollo-server');

const typeDefs = gql`
    type Vendor {
        id: ID!
        name: String
        region: String
        url: String
        phone: String
        email: String
        instagram: String
        facebook: String
        twitter: String
        description: String
        rating: Int
        images: Images
        open: [Location]
    }

    type Location {
        start: Int
        end: Int
        display: String
        updated: Int
        latitude: Float
        longitude: Float
    }

    type Region {
        id: ID!
        name: String
        fullName: String
        country: String
        latitude: Float
        longitude: Float
    }

    type Images {
        logo: String
        logo_small: String
        header: String
    }

    type Query {
        vendors: [Vendor]
        vendor(id: ID!): Vendor
        regions: [Region]
        regionsByCountry(country: String): [Region]
    }
`;

module.exports = typeDefs;