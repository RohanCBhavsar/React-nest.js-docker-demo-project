
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductWhereInput } from "./ProductWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ProductCountArgs {
  @ApiProperty({
    required: false,
    type: () => ProductWhereInput,
  })
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;
}

export { ProductCountArgs as ProductCountArgs };
