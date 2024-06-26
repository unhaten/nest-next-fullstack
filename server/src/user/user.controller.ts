import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	UseGuards
} from '@nestjs/common'
import {
	CreateUserDto
	// UpdateUserDto
} from './dto/user.dto'
import { UserService } from './user.service'
import { CommentsService } from 'src/comments/comments.service'
import { JwtGuard } from 'src/auth/guards/jwt.guard'

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(JwtGuard)
	@Get(':id')
	async getUserProfile(@Param('id') id: number) {
		return await this.userService.findById(id)
	}

	// -------------------------------------------------------------

	// constructor(
	// 	private readonly userService: UserService,
	// 	private readonly commentsService: CommentsService
	// ) {}

	// @Get(':id')
	// findOne(@Param('id') id: number) {
	// 	return this.userService.findOne(id)
	// }

	// @Post()
	// create(@Body() CreateUserDto: CreateUserDto) {
	// 	return this.userService.create(CreateUserDto)
	// }

	// @Get(':id/comments')
	// getUserComments(@Param('id') id: string) {
	// 	return this.commentsService.findUserComments(id)
	// }

	// @Put(':id')
	// update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
	// 	return this.userService.update(id, updateUserDto)
	// }
}
