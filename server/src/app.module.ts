import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { CommentsModule } from './comments/comments.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from 'ormconfig'

@Module({
	imports: [
		// ConfigModule.forRoot(),
		UserModule,
		CommentsModule,
		TypeOrmModule.forRoot(config)
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
