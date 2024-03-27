import { Comments } from 'src/entities/comments.entity'
import { Topic } from 'src/entities/topic.entity'
import { User } from 'src/entities/user.entity'
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'

export const config: PostgresConnectionOptions = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: '1234',
	database: 'testDB',
	synchronize: true, // FIXME disable on prod
	entities: [User, Topic, Comments]
	// entities: ['dist/**/*.entity{.ts,.js}'],
	// migrations: ['dist/migrations/*{.ts,.js}'],
	// cli: {
	// 	migrationsDir: 'src/migrations'
	// }
}
