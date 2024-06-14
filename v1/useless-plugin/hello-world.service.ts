import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class HelloWorldService {
  private readonly logger = new Logger(HelloWorldService.name);
  constructor() {
    this.logger.log("HelloWorld!");
  }

  allContinents() {
    return [
      "Asia",
      "Europe",
      "Africa",
      "South America",
      "North America",
      "Australia",
      "Antarctica",
    ];
  }
}
