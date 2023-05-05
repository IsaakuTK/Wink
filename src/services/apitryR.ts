import { DataR } from "../types/dataR";
import data from "../mocks/dataR";

class Data {
  async get(): Promise<DataR[]> {
    console.log("starting fetch...");
    const value: DataR[] = await new Promise((resolve) => {
      setTimeout(() => resolve(data), 1000);
    });
    return value;
  }
}

export default new Data();