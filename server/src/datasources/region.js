const { RESTDataSource } = require('apollo-datasource-rest');

class RegionAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://data.streetfoodapp.com/1.1/';
  }

  async getAllRegions() {
    const res = await this.get('regions/');
    const result = JSON.parse(res);
    return result.map((region) => this.regionReducer(region));
  }

  async getRegionsByCountry({ country }) {
    const res = await this.get('regions/');
    const result = JSON.parse(res);
    const regions = result.reduce((regions, region) => {
        if (region.country === country) {
            regions.push(this.regionReducer(region));
        }

        return regions;
    }, []);
    return regions;
  }

  regionReducer(region) {
    return {
      id: region.identifier,
      name: region.name,
      fullName: region.name_long,
      country: region.country,
      latitude: region.latitude,
      longitude: region.longitude,
    };
  }
}

module.exports = RegionAPI;
