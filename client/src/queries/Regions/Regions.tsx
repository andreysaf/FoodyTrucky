import React, { useState, Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';

interface Region {
  id: string;
  fullName: string;
  name: string;
  country: string;
}

interface RegionsResults {
  regions: Region[];
}

interface RegionProps {
    updateRegionId: (regionId: string) => void;
}

const REGIONS = gql`
  query GetRegions {
    regions {
      id
      fullName
    }
  }
`;

const Regions = (props: RegionProps) => {
  const [regionId, setRegionId] = useState<string>('');

  const { loading, data } = useQuery<RegionsResults>(REGIONS);

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>
          I want to see food trucks in{' '}
          <select
            value={regionId}
            onChange={(e) => {
              setRegionId(e.target.value);
              props.updateRegionId(e.target.value);
            }}
          >
            {data &&
              data.regions &&
              data.regions.map((region: Region) => (
                <option value={region.id} key={region.id}>
                  {region.fullName}
                </option>
              ))}
          </select>
        </p>
      )}
    </Fragment>
  );
};

export default Regions;
