import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateUserDto } from './dto/user.dto'

@Injectable()
export class UserService {
	// constructor(private prisma: PrismaService) {}

	// async create(dto: CreateUserDto) {}
	findOne(id: string) {
		return {
			id: id
		}
	}

	create(createUserDto: CreateUserDto) {
		return 'the user is created'
	}
}
