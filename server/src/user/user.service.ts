import { ConflictException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import {
	CreateUserDto,
	//  UpdateUserDto 
} from './dto/user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/entities/user.entity'
import { Repository } from 'typeorm'
import { hash } from 'bcrypt'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) { }

	async create(dto: CreateUserDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		})

		if (user) throw new ConflictException('email duplicated')

		const newUser = await this.prisma.user.create(
			{
				data: {
					...dto,
					password: await hash(dto.password, 10)
				}
			}
		)

		const { password, ...result } = newUser
		return result
	}








	// ----------------------------------------------------------------------------------------------------------------

	// // constructor(private prisma: PrismaService) {}
	// constructor(
	// 	@InjectRepository(User) private readonly userRepo: Repository<User>
	// ) {}

	// // async create(dto: CreateUserDto) {}
	// async findOne(id: number) {
	// 	return await this.userRepo.findOne({ where: { id: id } })
	// }

	// async create(createUserDto: CreateUserDto) {
	// 	const user = await this.userRepo.create(createUserDto)
	// 	return await this.userRepo.save(user)
	// }

	// async update(id: number, updateUserDto: UpdateUserDto) {
	// 	return await this.userRepo.update(id, updateUserDto)
	// }
}
