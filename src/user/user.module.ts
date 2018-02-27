import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { CreateUserDto } from './dto/create-user.dto';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  components: [UserService],
})
export class UserModule {}