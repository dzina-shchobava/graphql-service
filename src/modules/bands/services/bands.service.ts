import { RESTDataSource } from "apollo-datasource-rest";
import "dotenv/config";

class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_URL;
  }

  async getBands(limit: number, offset: number) {
    try {
      const res = await this.get(`/?limit=${limit}&offset=${offset}`);
      return res.items;
    } catch (e) {
      console.log(e);
    }
  }

  async getBand(id: string) {
    try {
      return this.get(`/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  async createBand(createBandInput) {
    try {
      return await this.post(``, createBandInput)
    } catch (e) {
      console.log(e);
    }
  }
}

export { BandsService };
