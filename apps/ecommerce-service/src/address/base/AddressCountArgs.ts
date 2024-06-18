
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereInput } from "./AddressWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AddressCountArgs {
  @ApiProperty({
    required: false,
    type: () => AddressWhereInput,
  })
  @Field(() => AddressWhereInput, { nullable: true })
  @Type(() => AddressWhereInput)
  where?: AddressWhereInput;
}

export { AddressCountArgs as AddressCountArgs };
