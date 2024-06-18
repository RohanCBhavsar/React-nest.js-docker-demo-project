import { InputType, Field } from "@nestjs/graphql";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomerCreateNestedManyWithoutAddressesInput {
  @Field(() => [CustomerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomerWhereUniqueInput],
  })
  connect?: Array<CustomerWhereUniqueInput>;
}

export { CustomerCreateNestedManyWithoutAddressesInput as CustomerCreateNestedManyWithoutAddressesInput };
