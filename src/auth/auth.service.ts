import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ModelClass } from 'objection';
import { UserModel } from 'src/database/Models/users.model';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { IAuthenticate, Role } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@Inject('UserModel') private UserClass: ModelClass<UserModel>) {}

  async signup(props: Partial<CreateUserDto>) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(props.password, salt);
    props.password = password;
    const newUser = await this.UserClass.query().insert(props).returning('*');

    if (newUser) {
      const accessToken = sign({ ...newUser }, process.env.JWT_KEY);
      return { token: accessToken };
    } else {
      throw new NotFoundException('User Signup Fail');
    }
  }

  async login(
    authCredentialDto: Partial<AuthCredentialsDto>,
  ): Promise<IAuthenticate> {
    const { email, password } = authCredentialDto;
    const existUser: any = await this.UserClass.query().findOne({
      email: email,
    });
    if (existUser && (await bcrypt.compare(password, existUser.password))) {
      const accessToken = sign({ ...existUser }, 'secrete');
      return { token: accessToken };
    } else {
      throw new NotFoundException('Invalid Credentials');
    }
  }
}
