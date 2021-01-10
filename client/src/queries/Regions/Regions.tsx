import React, { useState, Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';

import './Regions.css'

interface Region {
  id: string;
  name: string;
  fullName: string;
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
      name
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
            <option hidden selected>
            </option>
            {data &&
              data.regions &&
              data.regions.map((region: Region) => (
                <option value={region.id} key={region.id}>
                  {region.fullName ? region.fullName : region.name}
                </option>
              ))}
          </select>
        </p>
      )}
    </Fragment>
  );
};

export default Regions;
