import { InMemoryCache, Reference } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          vendors: {
            keyArgs: ["regionId"],
            merge(existing, incoming) {
              let vendors: Reference[] = [];
              if (existing && existing.vendors) {
                vendors = vendors.concat(existing.vendors);
              }
              if (incoming && incoming.vendors) {
                vendors = vendors.concat(incoming.vendors);
              }
              return {
                ...incoming,
                vendors,
              };
            }
          }
        }
      }
    }
  });