import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity'; // Import the User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Add the User entity here
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
