import { gql } from '@apollo/client';

const VENDORS_BY_REGION = gql`
  query GetVendorsByRegion($regionId: String, $pageSize: Int, $after: String) {
    vendors(regionId: $regionId, pageSize: $pageSize, after: $after) {
      vendors {
        id
        name
        url
        phone
        email
        description
        rating
      }
      cursor
      hasMore
    }
  }
`;

export default VENDORS_BY_REGION;