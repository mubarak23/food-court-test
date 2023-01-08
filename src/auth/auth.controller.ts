import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RoleGuard } from './role.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async createUser(@Res() res, @Body() newUser: CreateUserDto) {
    try {
      const response = await this.authService.signup(newUser);
      return res.status(HttpStatus.OK).json({ response });
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Post('login')
  async login(@Res() res, @Body() authenticateDto: AuthCredentialsDto) {
    try {
      const response = await this.authService.login(authenticateDto);
      return res.status(HttpStatus.OK).json({ response });
    } catch (error) {
      return res.status(error.status).json(error.response);
    }
  }

  @Roles('ADMIN')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('profile')
  async profile(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user);
  }
}
