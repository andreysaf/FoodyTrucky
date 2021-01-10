import React, { Fragment, useState } from 'react';
import { useQuery } from '@apollo/client';

import VENDORS_BY_REGION from './VendorsQuery';

import FoodTruck from '../../components/FoodTruck/FoodTruck';

interface FoodTrucksProps {
  region: string;
}



const FoodTrucks = (props: FoodTrucksProps) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { loading, data, fetchMore } = useQuery(VENDORS_BY_REGION, {
    variables: { regionId: props.region, pageSize: 10 },
  });

  if (!data) {
    return <p>There are no food trucks in this area.</p>;
  }

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
