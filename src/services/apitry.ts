import { DataShape } from "../types/data";
import data from "../mocks/data";

class Data {
  async get(): Promise<DataShape[]> {
    console.log("starting fetch...");
    const value: DataShape[] = await new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000);
    });
    return value;
  }
}

export default new Data();