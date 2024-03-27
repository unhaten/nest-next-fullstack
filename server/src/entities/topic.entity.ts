import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Comments } from './comments.entity'

@Entity()
export class Topic {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	title: string

	@Column()
	description: string

	@OneToMany(type => Comments, comments => comments.topic)
	comments: Comments[]
}
