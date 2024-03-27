import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { CommentsService } from 'src/comments/comments.service'

@Module({
	providers: [UserService, CommentsService],
	controllers: [UserController]
})
export class UserModule {}
