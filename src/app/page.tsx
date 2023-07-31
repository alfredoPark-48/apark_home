import MainLayout from '@/components/layout/MainLayout'
import Image from 'next/image'
import AlfredoImage from '../assets/images/alfredo_park.jpg'

export default function Home() {
	return (
		<MainLayout>
			<div className='flex flex-col sm:flex-row justify-center p-10 gap-10'>
				<div>
					<Image
						src={AlfredoImage.src}
						width={AlfredoImage.width / 2}
						height={AlfredoImage.height / 2}
						alt='Alfredo image'
						className='rounded-2xl'
					/>
				</div>
				<div className='flex flex-col text-center items-center justify-center'>
					<h1 className='text-3xl mb-2'>
						Hello there, I am Alfredo Park
					</h1>
					<div className='flex items-center gap-2'>
						<h2 className='text-xl'>A Software Developer</h2>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
							/>
						</svg>
					</div>
				</div>
			</div>
		</MainLayout>
	)
}
