import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AddressUpdateInput } from "./AddressUpdateInput";

@ArgsType()
class UpdateAddressArgs {
  @ApiProperty({
    required: true,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @Field(() => AddressWhereUniqueInput, { nullable: false })
  where!: AddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AddressUpdateInput,
  })
  @ValidateNested()
  @Type(() => AddressUpdateInput)
  @Field(() => AddressUpdateInput, { nullable: false })
  data!: AddressUpdateInput;
}

export { UpdateAddressArgs as UpdateAddressArgs };
