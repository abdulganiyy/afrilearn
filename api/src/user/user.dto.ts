import { IsString } from "class-validator";

class CreateUserDto {
  @IsString()
  public username: string;

  @IsString()
  public firstName: string;

  @IsString()
  public lastName: string;

  @IsString()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public role: string;

  @IsString()
  public isAdmin: boolean;

  @IsString()
  public address: string;
}

export default CreateUserDto;
