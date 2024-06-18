import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressCreateInput } from "./AddressCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateAddressArgs {
  @ApiProperty({
    required: true,
    type: () => AddressCreateInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateInput)
  @Field(() => AddressCreateInput, { nullable: false })
  data!: AddressCreateInput;
}

export { CreateAddressArgs as CreateAddressArgs };
