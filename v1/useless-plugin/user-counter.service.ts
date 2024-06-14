import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { UsersService } from "../../../src/modules/users/users.service";

@Injectable()
export class UserCounterService {
  private readonly logger = new Logger(UserCounterService.name);
  constructor(private usersService: UsersService) {}

  @Cron("*/3 * * * * *")
  async countGames() {
    const count = (await this.usersService.find()).length;
    this.logger.log(`There are ${count} users in the database.`);
  }
}
