import { gql } from '@apollo/client';

const REGIONS = gql`
  query GetRegions {
    regions {
      id
      name
      fullName
    }
  }
`;

export default REGIONS;