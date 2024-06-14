import { Module } from "@nestjs/common";

import {
  GameVaultPluginModule,
  GameVaultPluginModuleMetadataV1,
} from "../../../src/globals";
import { UsersModule } from "../../../src/modules/users/users.module";
import { HelloWorldController } from "./hello-world.controller";
import { HelloWorldService } from "./hello-world.service";
import { UserCounterService } from "./user-counter.service";

@Module({
  imports: [
    UsersModule, // You can use any modules of GameVault here
  ],
  controllers: [
    HelloWorldController, // You can provide your own API endpoints
  ],
  providers: [HelloWorldService, UserCounterService],
})
export default class UselessPluginModule implements GameVaultPluginModule {
  metadata: GameVaultPluginModuleMetadataV1 = {
    name: "Useless Plugin",
    author: "Phalcode",
    version: "1.0.0",
    description:
      "An useless example plugin. This plugin does nothing useful. It is just an example. It logs the count of users on the server every three seconds and provides two rest apis that show some samples.",
    keywords: ["example", "api"],
    license: "UNLICENSE",
    website: "https://gamevau.lt",
  };
}
