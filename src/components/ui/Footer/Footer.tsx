import { FC } from 'react'
import NextJsLogo from '@/assets/icons/nextjs-icon-svgrepo-com.svg'
import Image from 'next/image'

const Footer: FC = () => {
	return (
		<div className='flex flex-col text-center p-10 gap-2'>
			&copy; {new Date().getFullYear()} Alfredo Park
			<div className='flex justify-center gap-2 items-center'>
				<div>
					<p className='text-sm'>Built with Next.js</p>
				</div>
				<div>
					<Image
						src={NextJsLogo}
						width={20}
						height={20}
						alt='nextjs-logo'
					/>
				</div>
			</div>
		</div>
	)
}
export default Footer
