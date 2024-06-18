
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductWhereInput } from "./ProductWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProductOrderByInput } from "./ProductOrderByInput";

@ArgsType()
class ProductFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProductWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProductWhereInput, { nullable: true })
  @Type(() => ProductWhereInput)
  where?: ProductWhereInput;

  @ApiProperty({
    required: false,
    type: [ProductOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProductOrderByInput], { nullable: true })
  @Type(() => ProductOrderByInput)
  orderBy?: Array<ProductOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProductFindManyArgs as ProductFindManyArgs };
