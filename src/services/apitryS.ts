import { DataS } from "../types/dataS";
import data from "../mocks/dataS";

class Data {
  async get(): Promise<DataS[]> {
    console.log("starting fetch...");
    const value: DataS[] = await new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000);
    });
    return value;
  }
}

export default new Data();
