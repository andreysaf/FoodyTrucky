import React, { Fragment, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import FoodTruck from '../../components/FoodTruck/FoodTruck';

interface FoodTrucksProps {
  region: string;
}

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
      }
      cursor
      hasMore
    }
  }
`;

const FoodTrucks = (props: FoodTrucksProps) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { loading, data, fetchMore } = useQuery(VENDORS_BY_REGION, {
    variables: { regionId: props.region, pageSize: 10 },
  });

  console.log(data);

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          {data.vendors &&
            data.vendors.vendors &&
            (data.vendors.vendors.length > 0 ? (
              data.vendors.vendors.map((vendor: any) => (
                <FoodTruck key={vendor.id} {...vendor} />
              ))
            ) : (
              <p>There are no food trucks in this area.</p>
            ))}
          {data.vendors &&
            data.vendors.hasMore && (
              <button
                onClick={async () => {
                  setIsLoadingMore(true);
                  await fetchMore({
                    variables: {
                      regionId: props.region,
                      pageSize: 10,
                      after: data.vendors.cursor,
                    },
                  });
                  setIsLoadingMore(false);
                }}
              >
                {isLoadingMore ? 'Loading' : 'Still Hungry'}
              </button>
            )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default FoodTrucks;
