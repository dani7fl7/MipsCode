import { IsString, IsUUID } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class CreateTasklistDto {
  @ApiProperty({ required: true })
  @IsString()
  name: string

  @ApiProperty({ required: true })
  @IsUUID()
  classroomId: string

  @ApiProperty({ required: true })
  @IsUUID()
  professorId: string
}
