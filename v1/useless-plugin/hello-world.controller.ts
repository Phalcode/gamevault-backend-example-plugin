import { Controller, Get } from "@nestjs/common";
import { Public } from "../../../src/decorators/public.decorator";
import { HelloWorldService } from "./hello-world.service";

@Controller("example")
export class HelloWorldController {
  constructor(private helloWorldService: HelloWorldService) {}

  @Get("hello")
  @Public()
  getHello() {
    return `<h1>Hello World! 👋🌍</h1>It is ${new Date()}`; // returns an html page
  }

  @Get("world")
  @Public()
  getWorld() {
    // use a service to return some json
    return this.helloWorldService.allContinents();
  }
}
