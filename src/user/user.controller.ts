import { Body, Controller, Post } from '@nestjs/common'
import { userDto } from './dtos/create-user.dto'
import { UserService } from './user.service'

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('signup')
  createUser(@Body() body: userDto) {
    return this.userService.create(body.email, body.password)
  }
}
