import axios from "axios";

export class MySDK {
  constructor(private baseUrl: string) {}

  async fetchData(endpoint: string): Promise<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching data from ${url}: ${error.message}`);
    }
  }
}
