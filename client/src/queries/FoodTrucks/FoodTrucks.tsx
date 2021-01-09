import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';

import FoodTruck from '../../components/FoodTruck/FoodTruck';

interface FoodTrucksProps {
  region: string;
}

const VENDORS_BY_REGION = gql`
  query GetVendorsByRegion($regionId: String) {
    vendors(regionId: $regionId) {
      id
      name
      url
      phone
      email
      description
    }
  }
`;

const FoodTrucks = (props: FoodTrucksProps) => {
  console.log(props.region);

  const { loading, data, error } = useQuery(VENDORS_BY_REGION, {
    variables: { regionId: props.region },
  });

  console.log(error);

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          {data &&
            data.vendors &&
            data.vendors.map((vendor: any) => <FoodTruck {...vendor} />)}
        </Fragment>
      )}
    </Fragment>
  );
};

export default FoodTrucks;
