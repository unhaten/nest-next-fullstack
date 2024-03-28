import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { CommentsModule } from './comments/comments.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from 'ormconfig'
import { PrismaService } from './prisma.service'
import { AuthModule } from './auth/auth.module'

@Module({
	imports: [
		//* gives access to env variables
		ConfigModule.forRoot(),
		UserModule,
		AuthModule
		// CommentsModule,
		// TypeOrmModule.forRoot(config)
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule { }
