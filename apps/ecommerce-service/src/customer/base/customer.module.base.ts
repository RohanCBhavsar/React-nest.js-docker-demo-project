
import { Module } from "@nestjs/common";
import { MorganModule } from "nest-morgan";

@Module({
  imports: [MorganModule],
  exports: [MorganModule],
})
export class CustomerModuleBase {}
