import {
	BeforeInsert,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import * as bcrypt from 'bcrypt'
import { Comments } from './comments.entity'

@Entity('user')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ unique: true, nullable: false })
	name: string

	@Column({ unique: true, nullable: false })
	email: string

	@Column({ nullable: false })
	password: string

	@OneToMany(type => Comments, comments => comments.user)
	comments: Comments[]

	@BeforeInsert()
	async hashPassword() {
		this.password = await bcrypt.hash(this.password, 10)
	}
}
