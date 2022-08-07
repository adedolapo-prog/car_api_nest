import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common'
import { userDto } from './dtos/create-user.dto'
import { UpdateUserDto } from './dtos/update-user.dto'
import { UserService } from './user.service'

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  createUser(@Body() body: userDto) {
    return this.userService.create(body.email, body.password)
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id))
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.userService.find(email)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id))
  }

  @Patch('id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body)
  }
}
