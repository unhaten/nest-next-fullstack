import NextAuth from 'next-auth/next'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			email: string
			name: string
		}
		backendTokens: {
			accessToken: string
			refreshToken: string
		}
	}
}

import { JWT } from 'next-auth/jwt'

declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			id: string
			email: string
			name: string
		}
		backendTokens: {
			accessToken: string
			refreshToken: string
		}
	}
}
