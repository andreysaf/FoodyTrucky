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

  const { loading, data } = useQuery(VENDORS_BY_REGION, {
    variables: { regionId: props.region },
  });

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          {data &&
            data.vendors &&
            (data.vendors.length > 0 ? (
              data.vendors.map((vendor: any) => (
                <FoodTruck key={vendor.id} {...vendor} />
              ))
            ) : (
              <p>There are no food trucks in this area.</p>
            ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default FoodTrucks;
