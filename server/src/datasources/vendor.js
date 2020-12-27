const { RESTDataSource } = require('apollo-datasource-rest');

class VendorAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://data.streetfoodapp.com/1.1/';
  }

  async getAllVendors() {
    const res = await this.get('schedule/vancouver/');
    const result = JSON.parse(res);
    const vendors = result.vendors;
    return Object.values(vendors).map((vendor) => this.vendorReducer(vendor) );
  }

  async getVendor({ vendorId }) {
    const res = await this.get(`vendor/${vendorId}`);
    console.log(res);
    return this.vendorReducer(res);
  }

  vendorReducer(vendor) {
    return {
      id: vendor.identifier,
      name: vendor.name,
      region: vendor.region,
      url: vendor.url,
      phone: vendor.phone,
      email: vendor.email,
      instagram: vendor.instagram,
      facebook: vendor.facebook,
      twitter: vendor.twitter,
      description: vendor.description,
      rating: vendor.rating,
      images: {
        logo: vendor.images ? vendor.images.logo : null,
        logo_small: vendor.images ? vendor.images.logo_small  : null,
        header: vendor.images ? vendor.images.headers  : null,
      },
      open: vendor.open ? vendor.open.map((location) => ({
        start: location.start,
        end: location.end,
        display: location.display,
        updated: location.updated,
        latitude: location.latitude,
        longitude: location.longitude,
      })) : [],
    };
  }
}

module.exports = VendorAPI;
