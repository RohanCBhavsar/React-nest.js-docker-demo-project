import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductCreateInput } from "./ProductCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateProductArgs {
  @ApiProperty({
    required: true,
    type: () => ProductCreateInput,
  })
  @ValidateNested()
  @Type(() => ProductCreateInput)
  @Field(() => ProductCreateInput, { nullable: false })
  data!: ProductCreateInput;
}

export { CreateProductArgs as CreateProductArgs };
