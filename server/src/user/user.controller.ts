import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/user.dto'
import { UserService } from './user.service'
import { CommentsService } from 'src/comments/comments.service'

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly commentsService: CommentsService
	) {}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(id)
	}

	@Post()
	create(@Body() CreateUserDto: CreateUserDto) {
		return this.userService.create(CreateUserDto)
	}

	@Get(':id/comments')
	getUserComments(@Param('id') id: string) {
		return this.commentsService.findUserComments(id)
	}
}
