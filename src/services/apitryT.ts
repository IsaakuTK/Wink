import { DataT } from "../types/dataT";
import data from "../mocks/dataT";

class Data {
  async get(): Promise<DataT[]> {
    console.log("starting fetch...");
    const value: DataT[] = await new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000);
    });
    return value;
  }
}

export default new Data();