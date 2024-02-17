import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userSvc: UserService,
    private jwtSvc: JwtService,
  ) {}

  async signin(userName: string, password: string): Promise<any> {
    const user = await this.userSvc.getUserData(userName);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payLoad = { name: user.name, email: user.email };
    console.log(payLoad);
    return { access_token: await this.jwtSvc.signAsync(payLoad) };
  }
}
