'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

const SignButton = () => {
	const { data: session } = useSession()

	if (session && session.user) {
		return (
			<div className='flex gap-4 ml-auto'>
				<p className='text-sky-600'>{session.user.name}</p>
				<Link
					href={'api/auth/signout'}
					className='flex gap-4 ml-auto text-red-400'
				>
					Sign Out
				</Link>
			</div>
		)
	} else {
		return (
			<div className='flex gap-4 ml-auto items-center'>
				<Link
					href='/api/auth/signin'
					className='flex gap-4 ml-auto text-green-400'
				>
					Sign IN
				</Link>
				<Link
					href='/signup'
					className='flex gap-4 ml-auto bg-green-400 text-green-100'
				>
					Sign up
				</Link>
			</div>
		)
	}
}

export default SignButton
