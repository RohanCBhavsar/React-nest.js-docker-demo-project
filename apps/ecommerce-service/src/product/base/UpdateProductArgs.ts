
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProductUpdateInput } from "./ProductUpdateInput";

@ArgsType()
class UpdateProductArgs {
  @ApiProperty({
    required: true,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProductUpdateInput)
  @Field(() => ProductUpdateInput, { nullable: false })
  data!: ProductUpdateInput;
}

export { UpdateProductArgs as UpdateProductArgs };
