import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private userSvc: UserService) {}

  @Post('create')
  async create(@Body() userData: User): Promise<User> {
    return this.userSvc.create(userData);
  }

  @UseGuards(AuthGuard)
  @Get('profile/:id')
  async profile(@Param('id') id: string): Promise<User> {
    return this.userSvc.profile(id);
  }

  @UseGuards(AuthGuard)
  @Put('update/:id')
  async update(@Param('id') id: string, @Body() userData: User): Promise<User> {
    return this.userSvc.update(id, userData);
  }

  @UseGuards(AuthGuard)
  @Delete('delete/:id')
  async delete(@Param('id') id: string, @Body() userData: User): Promise<User> {
    return this.userSvc.delete(id);
  }

  //   logout
  // encryption
  // guard
}
