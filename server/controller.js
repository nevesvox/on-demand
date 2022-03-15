import { Service } from "./service";

export class Controller {
  constructor() {
    this.service = new Service()
  }

  async getFileStream(filename) {
    return this.service.getFileStream(filename)
  }
}