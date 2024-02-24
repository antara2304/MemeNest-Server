import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private userSvc: UserService) {}

  @Post('create')
  async create(@Body() userData: User): Promise<User> {
    return this.userSvc.create(userData);
  }
  @Get('profile/:id')
  async profile(@Param('id') id: string): Promise<User> {
    return this.userSvc.profile(id);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() userData: User): Promise<User> {
    return this.userSvc.update(id, userData);
  }

  @Delete('delete')
  async delete(@Param('id') id: string, @Body() userData: User): Promise<User> {
    return this.userSvc.delete(id);
  }

  //   logout
  // encryption
  // guard
}
