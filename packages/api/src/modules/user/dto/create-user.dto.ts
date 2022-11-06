import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: "The user's first name",
  })
  firstName: string;

  @ApiProperty({
    description: "The user's last name",
  })
  lastName?: string;

  @ApiProperty({
    description: "The user's email",
  })
  email: string;
}
