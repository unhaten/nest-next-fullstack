import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { CommentsService } from 'src/comments/comments.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'
import { PrismaService } from 'src/prisma.service'
import { JwtService } from '@nestjs/jwt'

@Module({
	providers: [
		UserService,
		PrismaService,
		JwtService
		//  CommentsService
	],
	controllers: [UserController],
	imports: [
		// TypeOrmModule.forFeature([User])
	]
})
export class UserModule {}
