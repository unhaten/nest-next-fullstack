import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { CommentsService } from 'src/comments/comments.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'

@Module({
	providers: [UserService,
		//  CommentsService
	],
	controllers: [UserController],
	imports: [
		// TypeOrmModule.forFeature([User])
	]
})
export class UserModule { }
