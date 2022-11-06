import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: "The document's id",
    required: true,
  })
  id: string;

  @ApiProperty({
    description: "The user's first name",
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    description: "The user's last name",
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    description: "The user's email",
    required: false,
  })
  email?: string;
}
